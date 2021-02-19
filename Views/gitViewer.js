import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Table from './Components/table';


const GitViewer = ({commits, user, query, screenWidth}) => {


  return (
    <>
      <View>
        <Text>User: {user.trim()}</Text>
        <Text>Repo: {query.trim()}</Text>
      </View>
      <Table commits={commits} screenWidth={screenWidth}/>
    </>
  )
}

export default GitViewer;