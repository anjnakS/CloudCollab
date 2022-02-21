import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './Circle.css';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e5e5e5",
 
    },
    containerTeam: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#808080",
        flexDirection: "row",
      },
    headerText: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    }, 
    TeamNameShape: {
      width: 250,
      height: 150,
      borderRadius: 150 / 2,
      backgroundColor: '#FF9800',
    },WorkShape: {
        width: 150,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor:  '#FF00FF',
      },
    TeamShape: {
        width: 150,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#0000d6',
      },
      TeamMemberShape: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#00a800',
      },
  });
export default function Games() {

    

  return(
    <div  style={{ float: "right"  }}>
    <View style={styles.container}>
    <Text style={styles.headerText}> Games I am intresested in: </Text>
   
    <Text style={styles.headerText}> Bingo </Text>
    <View style={styles.WorkShape} />
    <Text style={styles.headerText}> Me (Anjna Khanna) </Text>
    <input
          type="checkbox"
          checked="true"
        
        />
    <View style={styles.TeamMemberShape} /> 
    <Text style={styles.headerText}> Twinkle Patel </Text>
    <input
          type="checkbox"
          checked="true"
        
        />
    <View style={styles.TeamMemberShape} /> 
  
    </View>
  
  
    </div>
  );
}





