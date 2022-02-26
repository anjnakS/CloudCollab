FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8443
ADD target/msal-web-sample-0.1.0.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]