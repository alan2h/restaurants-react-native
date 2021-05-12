import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import firebase from "firebase/app";
import "firebase/auth";

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';


export default function Account(){

    const [ login, setLogin ] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (!(user)){
                setLogin(false);
            }else{
                setLogin(true);
            }
        })
    }, [])

    if (login === null) return (
        <View>
            <Text>
                Cargando ...
            </Text>
        </View>
    )

   if (login){
       return(
           <UserLogged/>
       )
   }else{
       return(
           <UserGuest />
       )
   }
}