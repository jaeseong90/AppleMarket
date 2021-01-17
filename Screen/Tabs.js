import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Home from './Home/Home';
import Chat from './Chat/Chat';
import Reply from './Reply/Reply';
import MyPage from './MyPage/MyPage';
import Board from './Board/Board';
import 'react-native-gesture-handler';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  //헤더 커스터마이징은 추후 수정
  const homeHeader = () => (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        <Picker selectedValue="java">
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'row-reverse',
          alignItems: 'center',
          alignContent: 'center',
        }}
      ></View>
    </View>
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerRight: null,
    });

    const routeName = route?.state?.routeNames[route.state.index] || 'Home';
    if (routeName == 'Home') {
      navigation.setOptions({
        headerTitle: homeHeader,
        headerRight: () => (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Ionicons name="search" size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="filter" size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="baseball" size={30} />
            </TouchableOpacity>
          </View>
        ),
      });
    }

    if (routeName == 'Reply') {
      navigation.setOptions({
        headerTitle: '동네생활',
        headerRight: () => (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => alert('This is a button!')}>
              <Ionicons name="search" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('This is a button!')}>
              <Ionicons name="bookmarks" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('This is a button!')}>
              <Ionicons name="barbell-outline" size={30} />
            </TouchableOpacity>
          </View>
        ),
      });
    }

    if (routeName == 'MyPage') {
      console.log(routeName);
      navigation.setOptions({ headerTitle: '마이애플' });
    }
  }, [route]);

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="Reply"
        component={Reply}
        options={{
          tabBarLabel: '동네생활',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="text-box" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Board"
        component={Board}
        options={{
          tabBarLabel: '내주변',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="navigation" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: '채팅',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wechat" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyPage"
        component={MyPage}
        options={{
          tabBarLabel: '나의당근',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings-helper" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
