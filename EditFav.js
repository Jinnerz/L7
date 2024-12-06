import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet, Alert} from 'react-native';
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

const EditFav = ({navigation, route}) => {
    const [activity, setActivity] = useState(route.params.activity);
    const [price, setPrice] = useState(route.params.price.toString());

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
                            datasource2[indexnum].data[route.params.index].activity = activity;
                            datasource2[indexnum].data[route.params.index].price = Number(price);
                            navigation.navigate("Favourite");
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
                                        datasource2[indexnum].data.splice(route.params.index,1);
                                        navigation.navigate("Favourite");
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

export default EditFav;
