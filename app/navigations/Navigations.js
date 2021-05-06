import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RestaurantsStack from './RestaurantStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantsStack from './TopRestaurantsStack';

/*---- screens ----*/
import Account from '../screens/Account';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();


export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="restaurants" 
                    component={ RestaurantsStack } 
                    options={{ title: 'Restaurantes' }} 

                />
                <Tab.Screen 
                    name="favorites" 
                    component={ FavoritesStack } 
                    options={{ title: 'Favoritos' }} 
                />
                 <Tab.Screen 
                    name="account" 
                    component={ Account } 
                    options={{ title: 'Cuenta' }} 
                />
                 <Tab.Screen 
                    name="search" 
                    component={ Search } 
                    options={{ title: 'Buscar' }} 
                />
                 <Tab.Screen 
                    name="top-restaurants" 
                    component={ TopRestaurantsStack } 
                    options={{ title: 'Top 5' }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}