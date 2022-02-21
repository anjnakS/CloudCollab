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
  
    <Text style={styles.headerText}> Owiny</Text>
    <View style={styles.TeamMemberShape} />  
    <Text style={styles.headerText}> Twinkle Patel </Text>
    <View style={styles.TeamMemberShape} />  
    <Text style={styles.headerText}> Roop </Text>
    <View style={styles.TeamMemberShape} />  
    <Text style={styles.headerText}> Jason </Text>
    <View style={styles.TeamMemberShape} />  
    </View>
  
    </div>
  );
}





