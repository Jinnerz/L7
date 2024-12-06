import React from 'react';
import {View, Alert, SectionList, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import {datasource} from "./Data";

const styles = StyleSheet.create({
    activityContainer: {
        backgroundColor: "lightgray",
        padding: 10,
        flexDirection: "row",
        borderWidth: 1,
        justifyContent: "space-around",
    },
    titleContainer: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 1,
        marginTop: 10,
    },
    introContainer: {
        padding: 10,
        alignItems: "center",
        backgroundColor: 'black',
    }
})

const Home = ({navigation}) => {
    //Looping through the data sets for number calculation
    //Only 2 loops necessary due to only 2 categories, impractical if many categories
    //datasource[0].data.length is the dataset at the 0th index, which is the Expenses, and .data.length is how many elements are in the data
    let totalIncome = 0;
    let totalExpense = 0;
    for (let i = 0; i < datasource[0].data.length; i++) {
     totalExpense = totalExpense + datasource[0].data[i].price
    }
    for (let i = 0; i < datasource[1].data.length; i++) {
        totalIncome = totalIncome + datasource[1].data[i].price
    }

    let message = "";
    if (totalIncome > totalExpense) {
        message = `You have a surplus of $${totalIncome - totalExpense}`;
    }
    if (totalExpense > totalIncome) {
        message = `You have a deficit of $${totalExpense - totalIncome}`;
    }
    if (totalExpense === totalIncome) {
        message = 'You have no surplus nor deficit!'
    }

    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                        navigation.navigate("Edit", {index: index, category:section.title, activity:item.activity, price: item.price});
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

    return (
        <View style={{marginTop:50, padding: 10}}>
            <View style={styles.introContainer}>
                <Text style={{color: 'white'}}>Welcome to my Income/Expense Tracker!</Text>
                {/*<Text style={{color: 'white'}}>Testing Expense: {totalExpense}</Text>*/}
                {/*<Text style={{color: 'white'}}>Testing Income: {totalIncome}</Text>*/}
            </View>

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({section: {title, bgcolor, dollarcolor, iconName}}) => (
                    <View style={[styles.titleContainer, {backgroundColor: bgcolor}]}>
                        <Icon name="dollar-sign" color={dollarcolor} />
                        <Text>{title}</Text>
                        <Icon name={iconName} color={dollarcolor} />
                    </View>
                )}
            />

            <View style={{marginTop:10}}>
                <Button
                    title="Add new Income/Expense"
                    onPress={()=> {navigation.navigate("Add")}}
                />
            </View>

            <View style={{marginTop:10}}>

                {/*\n is to separate line*/}
                <Button
                    title="Total Income/Expense"
                    onPress={()=> Alert.alert(
                        "Summary",
                        `Total Income: $${totalIncome}\nTotal Expense: $${totalExpense}\n${message}`
                    )}
                />
            </View>

            <View style={{marginTop:10}}>
                <Button
                    title="Favourites"
                    onPress={() => navigation.navigate("Favourites")}
                />
            </View>

        </View>
    );
};

export default Home;
