// // import React, { Component } from 'react';
// import { StyleSheet, View, TextInput, TouchableOpacity, Text,} from 'react-native';
// import QRCode from 'react-native-qrcode';
// class CodeGenertor extends Component {
// constructor() {
// super();
// this.state = {
//   inputValue: '',

//   valueForQRCode: '',

//     };
// }

//   getTextInputValue = () => {
// this.setState({ valueForQRCode: this.state.inputValue });
// };

//  render() {
// return (
//   <View style={styles.MainContainer}>

//     <TextInput
//       style={styles.TextInputStyle}
//       onChangeText={text => this.setState({ inputValue: text })}
//       underlineColorAndroid="transparent"
//       placeholder="Enter text to Generate QR Code"
//     />
//     <TouchableOpacity
//       onPress={this.getTextInputValue}
//       activeOpacity={0.7}
//       style={styles.button}>
//       <Text style={styles.TextStyle}> Generate QR Code </Text>
//     </TouchableOpacity>
//   </View>
// );
// }
// }
//      export default CodeGenertor;









































import React, { useState } from "react";

import { StyleSheet, ScrollView, TouchableOpacity, Button, TextInput, Text, Image, View, Touchable, _ScrollView } from 'react-native';
import ImagePickerExample from "./imagepicker";
import { db, addDoc, collection } from "../firebase/firebase";

export default function Form() {
    const [name, setname] = useState("")
    const [fname, setfname] = useState("")
    const [cnic, setcnic] = useState("")
    const [DOB, setDOB] = useState("")
    const [familymembercount, setfamilyMembercount] = useState("")
    const [errMsg, setErrMsg] = useState('');
    const [color, setcolor] = useState("green");
    const [image, setimage] = useState("")



    // 

    const SendRequest = async () => {

        if (name === "") {
            setcolor("red")

            setErrMsg(" Name Required");
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        } else if (fname === "") {
            setcolor("red")


            setErrMsg("fname Requried");
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }
        else if (cnic === "") {
            setcolor("red")


            setErrMsg("cnic Requried");
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }
        else if (DOB === "") {
            setcolor("red")


            setErrMsg("DOB Requried");
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }
        else if (familymembercount === "") {
            setcolor("red")


            setErrMsg("family person count Requried");
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }


        else {


            try {
                let obj = {
                    name,
                    fname,
                    cnic,
                    DOB,
                    familymembercount,


                }
                setname("")
                setfname("")
                setcnic("")
                setDOB("")
                setfamilyMembercount("")
                setimage("")
                let input_text = collection(db, "User");
                await addDoc(input_text, obj)
                alert("Request Submit Sucessfully")

            }
            catch {
               alert('Failed To Send Request Try Again')
            }

        }
    }







    return (
        <ScrollView>
            <View style={{
                height: 90, width: '100%', backgroundColor: '#009387', justifyContent: 'center', alignItems: 'center', paddingTop: 20, position: 'absolute'
            }}>


                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Well Come  </Text>
                
            </View>
            <View style={{ paddingTop: 70 }}>
                <Text style={styles.Signup}>
                    Add Bio-Detail
                </Text>

                <TextInput style={styles.input} placeholder="Name" onChangeText={text => (setname(text))}></TextInput>
                <TextInput style={styles.input} placeholder="Father Name" onChangeText={text => (setfname(text))}></TextInput>
                <TextInput style={styles.input} placeholder="CNIC Number" onChangeText={text => (setcnic(text))}></TextInput>
                <TextInput style={styles.input} placeholder="Date Of Birth" onChangeText={text => (setDOB(text))}></TextInput>
                <TextInput style={styles.input} placeholder="Family Member " onChangeText={text => (setfamilyMembercount(text))}></TextInput>


                {errMsg ? <Text style={{ color: "red", textAlign: "center", fontSize: 15, fontWeight: "bold" }}>{errMsg}</Text> : null}

                <View>
                    <ImagePickerExample />
                </View>

                <Text style={styles.send} onPress={SendRequest}>Submit</Text>
                {/*
         */}
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({


    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "#009387",
        padding: 10,

        color: "#009387",
        borderRadius: 9,
    },
    Signup: {
        fontSize: 30,

        fontWeight: "bold",
        marginTop: 50,
        textAlign: "center",
        color: "#009387"

    }
    ,
    send: {
        width: 300,
        height: 60,
        backgroundColor: "#009387",
        marginTop: 30,
        borderRadius: 5,
        marginLeft: 30,
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 10,
        color:'#fff',
        textAlign: "center",
    }
})