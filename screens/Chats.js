import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
  View,
} from 'react-native';
import Button from '../components/button';
import { useNavigation } from '@react-navigation/native';
import icons from '../constants/icons';
import colors from '../constants/colors';

const ChatsScreen = () => {

    
    let list = [];
    for (let i = 0; i < 20; i++) {

      list.push( <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: colors.chatBackgroundColor,
            paddingHorizontal: 10,
            paddingVertical: 15,
        }}
        key={i}>
        <View style={{ flexDirection: 'row' }} >
            <Image
                style={{
                    width: 40,
                    height: 40,
                    // resizeMode: 'contain',
                    borderRadius: 25,
                    marginRight: 15,
                }}
                source={{ uri: icons.profileIcon }}
            />
            <View style={{ justifyContent: 'space-between' }}>

                <Text style={{ fontWeight: "bold", fontSize: 16, color: 'white' }}>Name</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{
                            width: 10,
                            height: 10,
                            tintColor: 'white',
                        }}
                        source={{ uri: icons.tick }}
                    >
                    </Image>
                    <Text style={{ fontSize: 12, color: '#878c87', paddingHorizontal: 5 }}>Last Message</Text>
                </View>
            </View>
        </View>
        <View style={{ paddingVertical: 4 }}>
            <Text style={{ fontSize: 10, color: '#878c87' }}>{i}:13 am</Text>
        </View>
    </View>);
    }
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ width: '100%' }}>
                   {list}
                </ScrollView>
            </SafeAreaView>


        );
            
};

export default ChatsScreen;

const styles = StyleSheet.create({});
