/**
 * React Native App
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Table from './Views/Components/table';
import GitViewer from './Views/gitViewer';

const screenWidth = Dimensions.get('window').width;

const App = React$Node = () => {

  const [query, setQuery] = React.useState('');
  const [user, setUser] = React.useState('');
  const [commits, setCommits] = React.useState([]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.label}>GitHub Project Commit Viewer</Text>
            <View>
              <Text styles={styles.label}>GitHub User</Text>
              <TextInput
                placeholder="Enter a Github User"
                style={styles.input}
                onChangeText={query => setUser(query)}
                value={user}
              />
            </View>
            <View>
              <Text styles={styles.label}>GitHub Project</Text>
              <TextInput
                placeholder="Enter a Github Project"
                style={styles.input}
                onChangeText={query => setQuery(query)}
                value={query}
              />
            </View>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
              >
              <Text style={styles.buttonText}>Get Commits</Text>
            </TouchableOpacity>
          </View>
          <GitViewer commits={commits} user={user} query={query} screenWidth={screenWidth}/>
          <View style={styles.container}>
              {commits.length > 0 ? (
                <Text key={commits.sha}>{commits.sha}</Text>
              ) : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    width: screenWidth - 20,
    height: 38,
    padding: 4,
    fontSize: 16,
    borderColor: '#3a3a3a',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'#263238',
    borderColor: '#263238',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    alignSelf: 'center',
  }
});

export default App;
