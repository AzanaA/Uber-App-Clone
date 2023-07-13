import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
    id: "123",
    title: "Get a ride",
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png",
    screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5jP2Ko1eg-rcdK8Um3WX9aW7CGANWsHjS5wN4kwy6hSTQI8XWRex0kiRBvZrqxd6x-Gc&usqp=CAU",
        screen: "EatsScreen"
    }
];
 
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <SafeAreaView>
      <FlatList 
          data={data}
          horizontal
          keyExtractor={(item) => item.id} 
          renderItem={({ item }) => (
              <TouchableOpacity 
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                onPress={() => navigation.navigate(item.screen)}
                disabled={!origin}>
                <View style={tw` ${!origin && "opacity-20"}`}>
                  <Image 
                  style={{width: 120, height: 120, resizeMode: "contain"}}
                    source={{uri: item.image}}
                  />
                  <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                 <Icon 
                 style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                 name="arrowright" color="white" type="antdesign" />
                </View>
              </TouchableOpacity>
          )}
      />
    </SafeAreaView>
  )
};

export default NavOptions;

