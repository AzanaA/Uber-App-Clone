import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native'
import React from 'react'

const data = [
    {
    id: "123",
    title: "Get a ride",
    image: null,
    screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: null,
        screen: "EatsScreen"
    }
];
 
const NavOptions = () => {
  return (
    <FlatList 
        data={data}
        horizontal
        keyExtractor={(item) =>item.id} 
        renderItem={({ item }) => (
            <TouchableOpacity>
              <View>
                <Image 
                style={{width: 120, height: 120, resizeMode: "contain"}}
                  source={{uri: item.image}}
                />

              </View>
            </TouchableOpacity>
        )}
    />
  )
};

export default NavOptions;

