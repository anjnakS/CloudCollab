import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './Circle.css';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#C0C0C0",
 
    },
    containerTeam: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#808080",
        flexDirection: "row",
      },
    headerText: {
      fontSize: 15,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    }, 
    TeamNameShape: {
      width: 150,
      height: 100,
      borderRadius: 100 / 2,
      backgroundColor: '#FF9800',
    },WorkShape: {
        width: 100,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor:  '#c73333',
      },
    TeamShape: {
        width: 100,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor: '#0000d6',
      },
      TeamMemberShape: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: '#00a800',
      },
  });
export default function TeamGBC() {

  const [style1, setStyle1] = useState(styles.TeamMemberShape);
  const [style2, setStyle2] = useState(styles.TeamMemberShape);
  const [style3, setStyle3] = useState(styles.TeamMemberShape);
  const [style4, setStyle4] = useState(styles.TeamMemberShape);
  const [style5, setStyle5] = useState(styles.TeamMemberShape);
const changeStyle = (style) => {
  if(style === style1)
      style === styles.TeamMemberShape? setStyle1(styles.TeamMemberShapeSelected): setStyle1(styles.TeamMemberShape); 
  else if(style === style2)
      style === styles.TeamMemberShape? setStyle2(styles.TeamMemberShapeSelected): setStyle2(styles.TeamMemberShape); 

      else if(style === style3)
      style === styles.TeamMemberShape? setStyle3(styles.TeamMemberShapeSelected): setStyle3(styles.TeamMemberShape); 

      else if(style === style4)
      style === styles.TeamMemberShape? setStyle4(styles.TeamMemberShapeSelected): setStyle4(styles.TeamMemberShape); 

      else if(style === style5)
      style === styles.TeamMemberShape? setStyle5(styles.TeamMemberShapeSelected): setStyle5(styles.TeamMemberShape); 


};
const handleClick = (style) => {

   
    changeStyle(style);

}   

  return(
    <div>
    <View style={styles.container}>
    <Text style={styles.headerText}> Gainz Bond Crew </Text>
    <View style={styles.TeamNameShape} />

    <View style={styles.containerTeam}>
    <Text style={styles.headerText}> Current Work </Text>
    <View style={styles.WorkShape} />
    <Text style={styles.headerText}> Epic: MS-3035 Release version: 2022.03 Rag Status : Amber </Text>
    
    </View>
  
    </View>
    <View style={styles.containerTeam}>
    <Text style={styles.headerText}> Team </Text>
    <View style={styles.TeamShape} />  
  
    <Text onClick={() => handleClick(style1)}  style={styles.headerText}> Owiny</Text>
    <View onClick={() => handleClick(style1)}  style={style1} />  
    <Text onClick={() => handleClick(style1)} style={styles.headerText}> Twinkle Patel (QA)</Text>
    <View onClick={() => handleClick(style1)} style={style2} />  
    <Text onClick={() => handleClick(style1)} style={styles.headerText}> Roop </Text>
    <View onClick={() => handleClick(style1)} style={style3} />  
    <Text onClick={() => handleClick(style1)} style={styles.headerText}> Jason </Text>
    <View onClick={() => handleClick(style1)} style={styles4} /> 
    <Text onClick={() => handleClick(style1)} style={styles.headerText}> Anjna Khanna (Manager) </Text>
    <View onClick={() => handleClick(style1)}  style={styles5} />  
    </View>
  
    </div>
  );
}





