import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet, Alert} from 'react-native';
import {datasource} from "./Data";

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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

const Edit = ({navigation, route}) => {
    const [activity, setActivity] = useState(route.params.activity);
    const [price, setPrice] = useState(route.params.price.toString());
    //.toString() is a function that converts the integer to string for editing and displaying purposes

    return (
        <View style={{marginTop:50, padding: 10}}>
            <View style={styles.titleContainer}>
                <Text style={{color:'white', textAlign: "center"}}>Edit your Activity</Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={{backgroundColor: 'gray', padding: 5}}>
                    <Text style={{textAlign:'center'}}>Activity:</Text>
                </View>
                <TextInput value={activity} onChangeText={(activity) => setActivity(activity)} />
            </View>

            <View style={styles.inputContainer}>
                <View style={{backgroundColor: 'gray', padding: 5}}>
                    <Text style={{textAlign:'center'}}>Amount Spent/Gained:</Text>
                </View>
                <TextInput value={price} onChangeText={(price) => setPrice(price)} />
            </View>

            <View style={styles.buttonContainer}>
                <View style={{flex: 1, padding: 10}}>
                    <Button
                        title="Save"
                        onPress={() => {
                            let indexnum = 1;
                            if (route.params.category === 'Expense') {
                                indexnum = 0;
                            }
                            datasource[indexnum].data[route.params.index].activity = activity;
                            datasource[indexnum].data[route.params.index].price = price;
                            navigation.navigate("Home");
                        }
                        }
                    />
                </View>

                <View style={{flex: 1, padding: 10}}>
                    <Button
                        title="Delete"
                        onPress={() => {
                            let indexnum = 1;
                            if (route.params.category === 'Expense') {
                                indexnum = 0;
                            }
                            Alert.alert("Are you sure?", '',
                                [{text: 'Yes', onPress: () => {
                                        datasource[indexnum].data.splice(route.params.index,1);
                                        navigation.navigate("Home");
                                    }},
                                    {text: 'No'}
                                ]
                            )
                        }
                        }
                    />
                </View>
            </View>


        </View>
    );
};

export default Edit;
