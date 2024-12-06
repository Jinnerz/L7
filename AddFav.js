import React, {useState} from "react";
import {View, TextInput, Button, Text, StyleSheet, SectionList, TouchableOpacity} from "react-native";
import {datasource2} from "./Data2";
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'lightgray',
        borderWidth: 1,
        marginBottom: 10,
    },
    titleContainer: {
        padding:10,
        backgroundColor: 'black',
        marginBottom: 10,
    }
})

const AddFav = ({navigation}) => {
    const [title, setTitle] = useState('Expense');
    const [activity, setActivity] = useState('');
    const [price, setPrice] = useState('');

    return (
        <View style={{marginTop:50, padding: 10}}>
            <View style={styles.titleContainer}>
                <Text style={{color:'white', textAlign: "center"}}>Add New Favourite Activity:</Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={{backgroundColor: 'gray', padding: 5}}>
                    <Text style={{textAlign:'center'}}>Category of Activity:</Text>
                </View>
                <RNPickerSelect
                    onValueChange={(title) => setTitle(title)}
                    items={[
                        {label: 'Expense', value: 'Expense'},
                        {label: 'Income', value: 'Income'},
                    ]}
                />
            </View>

            <View style={styles.inputContainer}>
                <View style={{backgroundColor: 'gray', padding: 5}}>
                    <Text style={{textAlign:'center'}}>New Activity:</Text>
                </View>
                <TextInput placeholder="Enter Favourite Activity..." onChangeText={(activity) => setActivity(activity)} />
            </View>

            <View style={styles.inputContainer}>
                <View style={{backgroundColor: 'gray', padding: 5}}>
                    <Text style={{textAlign:'center'}}>Amount Spent/Gained:</Text>
                </View>
                <TextInput placeholder="Enter Amount Spent/Gained..."  onChangeText={(price) => setPrice(price)} />
            </View>

            <View style={{marginTop: 10}}>
                <Button
                    title="Submit new Item"
                    onPress={() => {
                        let newItem = {
                            activity: activity,
                            price: Number(price)
                        };

                        datasource2[0].data.push(newItem);
                        navigation.navigate("Favourites");
                    }
                    }
                />
            </View>
        </View>
    )
}

export default AddFav;
