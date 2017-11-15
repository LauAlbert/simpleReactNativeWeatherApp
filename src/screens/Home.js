import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Dimensions} from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import SelectedTop from '../components/SelectedTop';
import WeatherScroller from '../components/WeatherScroller';
import FactSheet from '../components/FactSheet';

const width = Dimensions.get('window').width;

class Home extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <SearchBar 
                    placeholder='Input City Name...'

                />

                <View style={{flex:1}}>
                <SelectedTop />
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Button containerViewStyle={{marginLeft: 0, marginRight: 0}} title='Today' backgroundColor="rgba(90, 200, 250, 1)"/>
                    </View>
                    <View style={{flex: 1}}>
                        <Button containerViewStyle={{marginLeft: 0, marginRight: 0}} title='5 Days' backgroundColor="rgba(0, 122, 255, 1)"/>
                    </View>
                    <View style={{flex: 1}}>
                        <Button containerViewStyle={{marginLeft: 0, marginRight: 0}} title='7 Days' backgroundColor="rgba(90, 200, 250, 1)"/>
                    </View>
                </View>

                <View style={{flex:2}}>
                    <WeatherScroller />
                </View>

                <View style={{flex:3}}>
                    <FactSheet />
                </View>
            </View>
        )
    }
}

export default Home;