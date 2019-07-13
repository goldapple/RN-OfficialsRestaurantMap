import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default class ListScreen extends React.Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text>ListScreen</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})