import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import firebase from '../../firebase';
export default class MapScreen extends React.Component{
    componentDidMount(){
        const db = firebase.firestore();
        
        dbh.collection("restaurant").get().then((query) => {
            query.forEach((doc) => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data().name)}`);
            })
        });
    }
    
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <MapView
                    style={styles.mapview}
                    provider={PROVIDER_GOOGLE}
                    showsMyLocationButton={true}
                    showsUserLocation
                    followsUserLocation
                    initialRegion={{
                        latitude: 36.464496,
                        longitude: 127.768667,
                        latitudeDelta: 4,
                        longitudeDelta: 4,
                    }}
                >
                    <Marker
                        image={require('../../assets/pin.png')}
                        coordinate={{
                            latitude: 36.464496,
                            longitude: 127.768667
                        }}
                    >
                        <Callout>
                            <Text>test</Text>
                            <Text>testde</Text>
                        </Callout>
                    </Marker>
                </MapView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapview: {
        flex: 1, 
        ...StyleSheet.absoluteFillObject,
      }
})