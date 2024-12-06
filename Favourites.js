import React from 'react';
import {Button, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {datasource2} from "./Data2";

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

const Favourites = ({navigation}) => {
    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("EditFav", {index: index, category:section.title, activity:item.activity, price: item.price});
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
        <View style={{marginTop: 50, padding: 10}}>
            <View style={styles.introContainer}>
                <Text style={{color: 'white'}}>View/Edit/Add Favourites here!</Text>
            </View>

            <SectionList
                sections={datasource2}
                renderItem={renderItem}
                renderSectionHeader={({section: {title, bgcolor}}) => (
                    <View style={[styles.titleContainer, {backgroundColor: bgcolor}]}>
                        <Text>{title}</Text>
                    </View>
                )}
            />


            <View style={{marginTop:10}}>
                <Button
                    title="Add new Favourite"
                    onPress={()=> {navigation.navigate("AddFav")}}
                />
            </View>
        </View>
    )
}

export default Favourites;
