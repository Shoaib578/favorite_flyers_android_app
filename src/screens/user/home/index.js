import React, {Component} from 'react';
import {ScrollView,Image} from 'react-native';
import Header from '../../../components/user/header';
import Explore from '../../../components/user/explore';
import Deals from '../../../components/user/deals';
import Logo from '../../../assets/splash-icon.png'

class Home extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {};
  render() {
    return (
      <ScrollView contentContainerStyle={{paddingTop:50}} showsVerticalScrollIndicator={false}>
        <Image source={Logo} style={{width:30,height:30,position:'absolute',padding:20,top:5}}/>

        <Header {...this.props} />
        <Explore {...this.props} />
        <Deals {...this.props} />
       
      </ScrollView>
    );
  }
}

export default Home;
