import React from 'react';
import ListItem from '../components/ListItem';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {StyleSheet, View, FlatList} from 'react-native';
import ListItemSeperator from '../components/ListItemSeperator';
import ListEmptyComp from '../components/ListEmptyComp';
import ListHeaderComp from '../components/ListHeaderComp';
import ListItemDelete from '../components/ListItemDelete';
//import { removeItem } from "../redux/actions/cartActions";
import ListItemFooter from '../components/ListItemFooter';

export default function Cart({navigation}) {
  const [quantity, setQuantity] = React.useState(1);
  const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <View style={{flex: 1, backgroundColor: '#303030'}}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <ListItem
            item={item}
            setQuantity={setQuantity}
            quantity={item.quantity}
            renderRightActions={() => <ListItemDelete item={item} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        ListEmptyComponent={ListEmptyComp}
        ListHeaderComponent={ListHeaderComp}
        ListFooterComponent={ListItemFooter}
      />
      <View style={styles.btn}>
        <Button
          title="Checkout"
          type="outline"
          buttonStyle={{borderColor: '#FF7F50'}}
          titleStyle={{color: '#fff'}}
          onPress={() => navigation.navigate('Checkout', {items: cart})}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 5,
  },
  btn: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
