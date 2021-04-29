import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// pages -- components
import Restaurants from '../screens/Restaurants';

const Stack = createStackNavigator();

export default function RestaurantsStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="restaurants" 
            component={Restaurants} 
            options={{ title: "Restaurant" }}
            />
        </Stack.Navigator>

    )
}