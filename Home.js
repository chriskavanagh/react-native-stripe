import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Home({route}) {
  // const {user} = route.params;
  //const {id} = route.params;
  return (
    <View>
      <Text>Home</Text>
      {/* <Text>otherParam: {JSON.stringify(user)}</Text> */}
      {/* <Text>otherParam: {JSON.stringify(id)}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({});
