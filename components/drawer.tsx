import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/Dashboard';
import ManageCategoriesScreen from '../screens/ManageCategories';
// import ManageCategoriesScreen from '../screens/ManageCategories';
import { View, Text } from 'react-native';

// Define the types for the drawer screens
type DrawerParamList = {
    Dashboard: undefined;
    ManageCategories: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerComponent = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Dashboard" component={DashboardScreen} />
                <Drawer.Screen name="ManageCategories" component={ManageCategoriesScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
        // <ManageCategoriesScreen />
    );
}

export default DrawerComponent;
