import React, { useEffect, useContext, useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const testData = [
  {
    id: 1,
    itemName: '패딩',
    dateText: '2020-11-11 20분전',
    price: '2000원',
  },
  {
    id: 2,
    itemName: '패딩',
    dateText: '2020-11-11 20분전',
    price: '2000원',
  },
  {
    id: 3,
    itemName: '패딩',
    dateText: '2020-11-11 20분전',
    price: '2000원',
  },
  {
    id: 4,
    itemName: '패딩',
    dateText: '2020-11-11 20분전',
    price: '2000원',
  },
  {
    id: 5,
    itemName: '패딩',
    dateText: '2020-11-11 20분전',
    price: '2000원',
  },
  {
    id: 6,
    itemName: '패딩',
    dateText: '2020-11-11 20분전',
    price: '2000원',
  },
  {
    id: 7,
    itemName: '패딩',
    dateText: '2020-11-11 20분전',
    price: '2000원',
  },
];

export default ({ navigation, route }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, useData] = useState(null);

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(1000).then(() => setRefreshing(false));
  }, []);

  const getData = () => {
    useData(testData);
  };

  useEffect(() => {
    getData();
  }, []);

  const Item = ({ item }) => {
    return (
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 10,
          borderBottomColor: 'blacks',
          borderBottomWidth: 1,
        }}
      >
        <TouchableOpacity
          onPress={(data) => {
            navigation.navigate({ name: 'Item', key: item.id });
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{ width: 90, height: 90 }}>
              <Image
                style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <Text style={{ fontSize: 20 }}>{item.itemName}</Text>
              <Text>{item.dateText}</Text>
              <Text>{item.price}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'flex-end',
              }}
            >
              <Ionicons name="heart-outline" size={18} />
              <Text>5</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <RefreshControl onRefresh={onRefresh} refreshing={refreshing}>
        <FlatList data={data} renderItem={Item} keyExtractor={(item) => item.id} />
      </RefreshControl>
    </View>
  );
};
