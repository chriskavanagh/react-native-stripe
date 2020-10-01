import React from 'react';
import {useDispatch} from 'react-redux';
import {Icon} from 'react-native-elements';
import {removeItem} from '../store/actions/cartActions';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
//import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ListItemDelete({item}) {
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback onPress={() => dispatch(removeItem(item.id))}>
      <View style={styles.container}>
        <Icon
          name="trash"
          type="font-awesome-5"
          color="white"
          size={36}
          //containerStyle={{ marginRight: 3 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#dc3545',
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/* export default function ListItemDelete({ item }) {
  const dispatch = useDispatch();
  /*  function deleteItem(id) {
    console.log("Delete Button Pressed");
    dispatch(removeItem(id));
  } 
  return (
    <TouchableWithoutFeedback onPress={() => dispatch(removeItem(item.id))}>
      <View style={styles.container}>
        <Icon
          name="trash"
          type="font-awesome-5"
          color="white"
          size={36}
          //containerStyle={{ marginRight: 3 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
} */
