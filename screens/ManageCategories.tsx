import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Category {
    name: string;
    fields: Field[];
}

interface Field {
    type: string;
}

const ManageCategories = (): JSX.Element => {
    const [categories, setCategories] = useState<Category[]>([]);

    const handleAddCategory = (): void => {
        setCategories((prevCategories) => [...prevCategories, { name: '', fields: [] }]);
    };

    const handleCategoryNameChange = (index: number, value: string): void => {
        const updatedCategories = [...categories];
        updatedCategories[index].name = value;
        setCategories(updatedCategories);
    };

    const handleAddField = (index: number): void => {
        const updatedCategories = [...categories];
        updatedCategories[index].fields.push({ type: 'text' });
        setCategories(updatedCategories);
    };

    const handleFieldChange = (
        categoryIndex: number,
        fieldIndex: number,
        fieldProp: string,
        value: string
    ): void => {
        const updatedCategories = [...categories];
        updatedCategories[categoryIndex].fields[fieldIndex][fieldProp] = value;
        setCategories(updatedCategories);
    };

    const handleDeleteField = (categoryIndex: number, fieldIndex: number): void => {
        const updatedCategories = [...categories];
        updatedCategories[categoryIndex].fields.splice(fieldIndex, 1);
        setCategories(updatedCategories);
    };

    return (
        <View style={styles.container}>
            <View>

                {categories.map((category, categoryIndex) => (
                    <View key={categoryIndex}>
                        <TextInput
                            style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
                            placeholder="Category Name"
                            value={category.name}
                            onChangeText={(value) => handleCategoryNameChange(categoryIndex, value)}
                        />

                        <Button title="Add Field" onPress={() => handleAddField(categoryIndex)} />

                        {category.fields.map((field, fieldIndex) => (
                            <View key={fieldIndex} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Picker
                                    selectedValue={field.type}
                                    style={{ flex: 1 }}
                                    onValueChange={(value) => handleFieldChange(categoryIndex, fieldIndex, 'type', value)}
                                >
                                    <Picker.Item label="Text" value="text" />
                                    <Picker.Item label="Number" value="number" />
                                    <Picker.Item label="Checkbox" value="checkbox" />
                                    <Picker.Item label="Date" value="date" />
                                </Picker>

                                <TouchableOpacity
                                    style={{ backgroundColor: 'red', padding: 10 }}
                                    onPress={() => handleDeleteField(categoryIndex, fieldIndex)}
                                >
                                    <Text style={{ color: 'white' }}>Delete Field</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleAddCategory}>
                <Text style={styles.buttonText}>Add New Category</Text>
            </TouchableOpacity>
            {/* <Text>Add Category</Text> */}
            {/* </Button> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        width: '100%',
        backgroundColor: 'blue',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default ManageCategories;
