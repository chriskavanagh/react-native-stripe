import React from 'react';
import NumInput from './NumInput';
//import {AntDesign} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet, Text, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

//import { removeItem } from "../redux/actions/cartActions";
//import { PanGestureHandler } from "react-native-gesture-handler";

export default function ListItem({
  item,
  quantity,
  setQuantity,
  renderRightActions,
}) {
  //console.log(`ListItem - ${quantity}`);
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.dish}>{item.dish}</Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
        <NumInput item={item} quantity={quantity} setQuantity={setQuantity} />
        <Icon name="swap" size={24} color="#CD5C5C" style={{marginLeft: 15}} />
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  subContainer: {
    flex: 1,
  },
  dish: {
    fontSize: 17,
    marginHorizontal: 1,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 17,
    marginHorizontal: 1,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 1,
    fontWeight: 'bold',
  },
});

// to delete item on swipe
/* import { PanGestureHandler } from "react-native-gesture-handler";
   import { removeItem } from "../redux/actions/cartActions";
export default function ListItem({ item, quantity, renderRightActions }) {
  const dispatch = useDispatch();
  //console.log(`ListItem - ${quantity}`);
  return (
    <PanGestureHandler onGestureEvent={() => dispatch(removeItem(item.id))}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.dish}>{item.dish}</Text>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
        <NumInput item={item} />
      </View>
    </PanGestureHandler>
  );
} */
