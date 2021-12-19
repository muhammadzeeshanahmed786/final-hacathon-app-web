import React from "react";
import { View, Text, StatusBar, Button } from 'react-native'
import LocationMap from "../mapView/map";
import { auth,onAuthStateChanged } from "../firebase/firebase";

export default function HomeSec({ navigation }) {
    
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor='#fff' barStyle="dark-content" />

            <View style={{
                height: 90, width: '100%', backgroundColor: '#009387', justifyContent: 'center', alignItems: 'center', paddingTop: 20, position: 'absolute'
            }}>


                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Map</Text>

            </View>
            <LocationMap />
            {/* <Button >Fill The Form</Button> */}
            <Button
                title="Go To Next Page And Fill The Form"
                color="#009387"
                onPress={()=>{navigation.navigate('Form')}}
            />
        </View>
    )
}