/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'native-base';
import Location from '../../../components/business/location';

const {height, width} = Dimensions.get('window');

class Coupon extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    tab: 'Active',
  };

  tabHandler = (tab) => {
    this.setState({
      tab: tab,
    });
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#F5F5F5'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                onPress={() => this.props.navigation.goBack(null)}
                name="ios-arrow-back"
                style={{paddingRight: 20}}
              />
              <View>
                <Text style={styles.heading}>Select Location</Text>
              </View>
            </View>
            <Icon
              onPress={() => this.props.navigation.navigate('AddLocation')}
              name="ios-add"
              style={{color: '#26BE8D', fontSize: 35}}
            />
          </View>
          <View style={styles.searchbar}>
            <View style={{paddingRight: 10}}>
              <Icon
                name="ios-search"
                style={{color: '#A1A1A1', fontSize: 20}}
                fontSize={18}
              />
            </View>
            <View
              style={{
                width: width / 2,
              }}>
              <TextInput
                // autoFocus={this.props.focus}
                keyboardAppearance={'dark'}
                // autoFocus={this.state.loaded}
                // autoFocus
                onChangeText={(text) => {
                  this.setState({
                    keyword: text,
                  });
                }}
                // value="Search"
                style={{
                  fontSize: 12,
                  fontFamily: 'Poppins-Regular',
                  width: width / 2,
                  // borderRadius:
                }}
                placeholder="Search Location"
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.props.navigation.navigate('Messages')}>
          <Location
            name="Toronto Donuts"
            address="220-B Golden Street East Texas - 184590"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.props.navigation.navigate('Messages')}>
          <Location
            name="Toronto Donuts"
            address="220-B Golden Street East Texas - 184590"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.props.navigation.navigate('Messages')}>
          <Location
            name="Toronto Donuts"
            address="220-B Golden Street East Texas - 184590"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.props.navigation.navigate('Messages')}>
          <Location
            name="Toronto Donuts"
            address="220-B Golden Street East Texas - 184590"
          />
        </TouchableOpacity>
        <Location name="Jason Pizzas" address="Square Point Texas - 483939" />
        <Location
          name="Toronto Donuts"
          address="220-B Golden Street East Texas - 184590"
        />
        <Location name="Jason Pizzas" address="Square Point Texas - 483939" />
      </ScrollView>
    );
  }
}

export default Coupon;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    // flex: 1,
    paddingBottom: 10,
    marginTop:50
  },
  container: {
    flex: 1,
    margin: 15,
    marginTop: 20,
    backgroundColor: 'white',
  },
  heading: {
    color: '#505050',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  searchbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderColor: 'black',
    //   borderWidth: 2,
    margin: 40,
    marginTop: 5,
    paddingLeft: 20,
    // elevation: 2,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 5,
    // shadowOffset: 110,
    // shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: width / 1.1,
    marginLeft: 20,
    marginBottom: 20,
    borderColor: '#C6C6C6',
    borderWidth: 0.5,
  },
});
