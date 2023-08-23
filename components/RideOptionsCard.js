import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation, setTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1596627972/assets/e7/e861a8-30ec-4d57-8045-7186f6c5ec35/original/comfort.png"
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png"
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_126,h_126/v1555366873/assets/37/e0e5f7-29d6-492c-b903-2fd99353af02/original/Final_Lux.png"
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw``}>
        <TouchableOpacity 
        onPress={() => navigation.navigate("NavigateCard")}
        style={tw`absolute top-3 left-5 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type='fontawesome'/>
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>

      <FlatList data={data} keyExtractor={(item) => item.id}
        renderItem={({item: {id, title, multiplier, image}, item }) => (
          <TouchableOpacity 
          style={tw`flex-row justify-between items-center px-10 ${id === selected?.id 
          && 'bg-gray-200'}`} 
          onPress={() => setSelected(item)}
          >
            <Image 
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{uri: image}}
            />

            <View stle={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
            </View>

            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat('en-us', {
                style: 'currency',
                currency: 'USD'
              }).format((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100)}
              </Text>

          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-top border-gray-200`}>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})