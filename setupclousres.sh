echo "########################## "
echo -e  " Set Shell variables"
echo "######################### "
VERSION=2
SUBSCRIPTION="0464d07f-ff01-42ff-9d99-92cd02ad7e83"
RESOURCE_GROUP="CloudCollabRG"
ACR_REG_NAME="anjnaacr"
POSTGRES_USER_NAME="anjna"
POSTGRES_DB=anjnapostgres
LOCATION="eastus"
SKU="Basic"
KEYVAULTNAME="cloudcollabkeyvault"
POSTGRES_PASSWD="Postgres1"
SERVICE_PRINCIPAL="anjnaspcc"$
SP_TENANT_ID="8d09f28d-2b54-4761-98f1-de38762cd939"

 echo "########################## "
echo -e  " Create Container Registry "
echo "######################### "

sudo az acr create --resource-group $RESOURCE_GROUP \
  --name $ACR_REG_NAME --sku $SKU
 echo "########################## "
 echo -e "creating the keyvault to store and retrieve secrets in our apps"
 echo "########################## "

SP_PASSWORD=$(sudo az ad sp create-for-rbac --name $SERVICE_PRINCIPAL --query password -o tsv)
SP_APPID=$(sudo az ad sp list --display-name $SERVICE_PRINCIPAL --query [].appId -o tsv)
SP_NAME=$(sudo az ad sp list --display-name $SERVICE_PRINCIPAL --query [].name -o tsv)
sudo az keyvault create \
    --resource-group $RESOURCE_GROUP \
    --name $KEYVAULTNAME \
    --enabled-for-deployment true \
    --enabled-for-disk-encryption true \
    --enabled-for-template-deployment true \
    --location $LOCATION \
    --query properties.vaultUri \
    --sku standard 
#    --enable-soft-delete true 
#    --enable-purge-protection true

sudo az keyvault secret set --name "spring-datasource-url" \
    --vault-name $KEYVAULTNAME \
    --value "jdbc:postgresql://anjnapostgres"$VERSION".postgres.database.azure.com:5432/postgres"

sudo az keyvault set-policy --name $KEYVAULTNAME --spn $SP_APPID --secret-permissions get list
echo "########################## "
echo -e  " Create Postgres Server"
echo "######################### "
sudo az account set -s $SUBSCRIPTION
sudo az postgres server create --resource-group $RESOURCE_GROUP  --name $POSTGRES_DB --ssl-enforcement Disabled \
    --location eastus --admin-user $POSTGRES_USER_NAME --admin-password  $POSTGRES_PASSWD --sku-name GP_Gen5_2 --assign-identity  
sudo az postgres server firewall-rule create \
    --subscription $SUBSCRIPTION \
    --resource-group $RESOURCE_GROUP \
    --server $POSTGRES_DB \
    --name AllowMyIP \
    --start-ip-address 0.0.0.0 \
    --end-ip-address 255.255.255.255

sudo az keyvault set-policy --name $KEYVAULTNAME -g $RESOURCE_GROUP  --spn $SP_APPID --secret-permissions get list
cd stocks-master
mvn clean install
cd ..
cd stocks-react-master
npm clean install
cd ..
cd stocks-worker
mvn clean install
mvn package
cd ..
echo -e "azure.keyvault.client-id="$SP_APPID
echo -e "azure.keyvault.client-key="$SP_PASSWORD
echo -e "azure.keyvault.tenant-id="$SP_TENANT_ID
echo -e "azure.keyvault.uri=https://"$KEYVAULTNAME".vault.azure.net/"
echo -e "spring.jms.servicebus.connection-string="$SBCONNSTRING
echo "########################## "
echo -e  " Create docker images and push them to ACR "
echo "c######################## "
sudo docker-compose up --no-start
sudo docker tag anjnadockerid1/cloudcollabfrontend:v3 $ACR_REG_NAME.azurecr.io/cloudcollabfrontend:v3
sudo az acr login --name $ACR_REG_NAME
sudo docker push $ACR_REG_NAME.azurecr.io/stocksserverfrontend:v3
sudo az acr repository list --name  $ACR_REG_NAME --output table
