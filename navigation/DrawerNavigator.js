import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Home from "../screens/Home";
const Drawer = createDrawerNavigator();

export default function DrawerNavigator () {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={Home} />
            <Drawer.Screen name="Abas" component={TabNavigator} />
        </Drawer.Navigator>
    );
};

