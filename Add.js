import React, {useState} from "react";
import {View, TextInput, Button, Text, StyleSheet, SectionList, TouchableOpacity} from "react-native";
import {datasource} from "./Data";
import RNPickerSelect from 'react-native-picker-select';
import {datasource2} from "./Data2";

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
    },
    FavContainer: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 1,
    },
    activityContainer: {
        backgroundColor: "lightgray",
        padding: 10,
        flexDirection: "row",
        borderWidth: 1,
        justifyContent: "space-around",
    },
    favBox: {
        backgroundColor: "gray",
        padding: 10,
        borderWidth: 1,
        alignItems: "center",
        textAlign: "center",
    }
})

const Add = ({navigation}) => {
    const renderItem = ({item, index, section}) => {
        let newSection = "";
        if (section.title === "Favourite Expense") {
            newSection = "Expense";
        }
        if (section.title === "Favourite Income") {
            newSection = "Income";
        }

        return (
            <TouchableOpacity
                onPress={() => {
                    setTitle(newSection);
                    setActivity(item.activity);
                    setPrice(item.price.toString());
                }
                }
            >
                <View style={styles.activityContainer}>
                    <Text>{item.activity}</Text>
                    <Text>|</Text>
                    <Text>${item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const [title, setTitle] = useState('Expense');
    const [activity, setActivity] = useState('');
    const [price, setPrice] = useState('');

    return (
        <View style={{marginTop:50, padding: 10}}>
            <View style={styles.titleContainer}>
                <Text style={{color:'white', textAlign: "center"}}>Add New Activity</Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={{backgroundColor: 'gray', padding: 5}}>
                    <Text style={{textAlign:'center'}}>Category of Activity:</Text>
                </View>
                <RNPickerSelect
                    value={title}
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
                <TextInput value={activity} placeholder="Enter New Activity..." onChangeText={(activity) => setActivity(activity)} />
            </View>

            <View style={styles.inputContainer}>
                <View style={{backgroundColor: 'gray', padding: 5}}>
                    <Text style={{textAlign:'center'}}>Amount Spent/Gained:</Text>
                </View>
                <TextInput value={price} placeholder="Enter Amount Spent/Gained..."  onChangeText={(price) => setPrice(price)} />
            </View>

            <View style={{marginTop: 10}}>
                <Button
                    title="Submit new Item"
                    onPress={() => {
                        let newItem = {
                            activity: activity,
                            price: Number(price)
                        };

                        let indexnum = 1;
                        if (title === 'Expense') {
                            indexnum = 0;
                        }
                        datasource[indexnum].data.push(newItem);
                        navigation.navigate("Home");
                    }
                    }
                />
            </View>

            <View style={{marginTop: 50}}>
                <View style={{marginBottom: 10}}>
                    <Text style={styles.favBox}>Quick Add your Saved Preferences Here!</Text>
                </View>

                <SectionList
                    sections={datasource2}
                    renderItem={renderItem}
                    renderSectionHeader={({section: {title, bgcolor}}) => (
                        <View style={[styles.FavContainer, {backgroundColor: bgcolor}]}>
                            <Text>{title}</Text>
                        </View>
                    )}
                />
            </View>

        </View>
    )
}

export default Add;
