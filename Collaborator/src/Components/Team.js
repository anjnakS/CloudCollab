import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './Circle.css';
import { Female } from '@mui/icons-material';

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
export default function Team() {

    

  return(
    <div >
    <View style={styles.container}>
    <Text style={styles.headerText}> Lets Get Fiscal </Text>
    <View style={styles.TeamNameShape} />
    </View>
    <View style={styles.containerTeam}>
    <Text style={styles.headerText}> Current Work </Text>
    <View style={styles.WorkShape} />
    <Text style={styles.headerText}> Epic: MS-3032 Release version: 2022.02 Rag Status : Green </Text>
    
    </View>
    <View style={styles.containerTeam}>
    <Text style={styles.headerText}> Team </Text>
    <View style={styles.TeamShape} />  
  
    <Text style={styles.headerText}> Adam Clark </Text>
    <View style={styles.TeamMemberShape} />  
    <Text style={styles.headerText}> Cate Ryan </Text>
    <View style={styles.TeamMemberShape} />  
    <Text style={styles.headerText}> Qun Zhao </Text>
    <View style={styles.TeamMemberShape} />  
    <Text style={styles.headerText}> Prasad (QA) </Text>
    <View style={styles.TeamMemberShape} />  
    <Text style={styles.headerText}> Anjna Khanna (Manager) </Text>
    <View style={styles.TeamMemberShape} />  
    </View>
  
    </div>
  );
}





