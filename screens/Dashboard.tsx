import React from 'react';
// import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

const DashboardScreen: React.FC = () => {

    // const navigation = useNavigation();

    const machines = useSelector(({ machines }) => machines)

    const handleManageCategoriesPress = () => {
        // navigation.navigate('ManageCategories');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Button
                title="Manage Categories"
                onPress={handleManageCategoriesPress}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
});

export default DashboardScreen;
