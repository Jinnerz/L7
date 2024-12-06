import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";
import Favourites from "./Favourites";
import AddFav from "./AddFav";
import EditFav from "./EditFav";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Add" component={Add} />
                <Stack.Screen name="Edit" component={Edit} />
                <Stack.Screen name="Favourites" component={Favourites} />
                <Stack.Screen name="AddFav" component={AddFav} />
                <Stack.Screen name="EditFav" component={EditFav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
