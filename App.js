import 'react-native-gesture-handler';
import React, {PureComponent} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {decode, encode} from 'base-64';
import stripe from 'tipsi-stripe';
import Button from './components/Button';
import axios from 'axios';

stripe.setOptions({
  publishableKey:
    'pk_test_51HTJOZJpGJGqUhHBUgpeQdMdC3AdxHmJnTNdJpAWpnk3zVKgAC2KkKhhbrrhASpx2ZSwr2tiDkoravwyngTH0MDl00WhfLJPzE',
});

//Firebase won't work without this.
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export default class CardFormScreen extends PureComponent {
  static title = 'Card Form';

  state = {
    loading: false,
    token: null,
  };

  handleCardPayPress = async () => {
    try {
      this.setState({loading: true, token: null});
      const token = await stripe.paymentRequestWithCardForm({
        // Only iOS support this options
        smsAutofillDisabled: true,
        requiredBillingAddressFields: 'full',
        prefilledInformation: {
          billingAddress: {
            name: 'Gunilla Haugeh',
            line1: 'Canary Place',
            line2: '3',
            city: 'Macon',
            state: 'Georgia',
            country: 'US',
            postalCode: '31217',
            email: 'ghaugeh0@printfriendly.com',
          },
        },
      });

      this.setState({loading: false, token});
    } catch (error) {
      this.setState({loading: false});
    }
  };

  makePayment = async () => {
    this.setState({loading: true});
    axios({
      method: 'POST',
      url:
        'https://us-central1-stripeproject-3e2a7.cloudfunctions.net/completePaymentWithStripe',
      data: {
        amount: 100,
        currency: 'usd',
        token: this.state.token,
      },
    }).then((response) => {
      console.log(response);
      this.setState({loading: false});
    });
  };

  render() {
    const {loading, token} = this.state;

    return (
      <>
        <View style={styles.container}>
          <Text style={styles.header}>Card Form Example</Text>
          <Text style={styles.instruction}>
            Click button to show Card Form dialog.
          </Text>
          <Button
            text="Enter you card and pay"
            loading={loading}
            onPress={this.handleCardPayPress}
          />
          {token && (
            <>
              <Text style={styles.instruction}>Token: {token.tokenId}</Text>
              <Button
                text="Make Payment"
                loading={loading}
                onPress={this.makePayment}
              />
            </>
          )}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  token: {
    height: 20,
  },
});
