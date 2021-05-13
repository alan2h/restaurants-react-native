import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Overlay } from "react-native-elements";

export default function Loading(props){
    const {is_visible, text} = props;
    return(
            <Overlay 
            isVisible={is_visible}
             windowbackgroundColor="rgba(0, 0, 0, 0.5)"
             overlayBackgroundColor="transparent"
             overlayStyle={styles.overlay}
            >
                <View>
                    <ActivityIndicator size="large" color="#00a680" />
                    { text && <Text>{text}</Text> }
                </View>
            </Overlay>
        )
}

const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: "#FFF",
        borderColor: "#00a680",
        borderWidth: 2,
        borderRadius: 10
    }
})