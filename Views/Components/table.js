import React from 'react';
import {
    View,
    Text,
  } from 'react-native';

const GenerateRow = (commit, indx) => {

    return (
        <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'center', backgroundColor: indx % 2 > 0 ? '#d3d3d3' : '#e0ffff'}}>
            { /* These are the cells. You may even take parameters to display different data / react elements etc. */}
            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center'}}>
                    {commit.author}
                </Text>
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
                <Text style={{textAlign: 'center'}}>
                    {commit.hash}
                </Text>
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
                <Text Text style={{textAlign: 'center'}}>
                    {commit.message}
                </Text>
            </View>
        </View>
    )
}

const Table = ({commits=[]}) => {
    
    return (
        <>
        <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'center', padding: 5}}>
            { /* These are the cells. You may even take parameters to display different data / react elements etc. */}
            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center'}}>
                <Text style={{textAlign: 'center'}}>
                    Author
                </Text>
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
                <Text style={{textAlign: 'center'}}>
                    Hash
                </Text>
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
                <Text Text style={{textAlign: 'center'}}>
                    Message
                </Text>
            </View>
        </View>
        {commits.map((commit, indx) => GenerateRow(commit, indx))}
        </>
    )
}

export default Table;