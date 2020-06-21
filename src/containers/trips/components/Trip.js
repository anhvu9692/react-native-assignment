import React from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';

export default function ({ trip, toDetails }) {

  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingVertical: 10,
      }}
    >
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          marginBottom: 10,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >{trip.trip_id}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#38ba7d',
          justifyContent: 'center',
          alignItems: 'center',
          height: 45,
          borderRadius: 5,
        }}
        onPress={() => toDetails(trip)}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 16,
          }}
        >Details</Text>
      </TouchableOpacity>
    </View>
  )
}
