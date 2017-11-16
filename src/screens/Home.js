import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Dimensions} from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import SelectedTop from '../components/SelectedTop';
import WeatherScroller from '../components/WeatherScroller';
import FactSheet from '../components/FactSheet';
import { fetchTodayWeather, fetchFiveWeather } from '../actions';

const width = Dimensions.get('window').width;

class Home extends Component {
    state = {
        searchValue: ""
    }

    componentWillMount() {

    }

    fetchTodayWeather() {
        console.log(this.state.searchValue);
        this.props.fetchTodayWeather(this.state.searchValue);
    }

    renderSelectedTop() {
        if(Object.getOwnPropertyNames(this.props.selectedDay).length == 0){
            return <SelectedTop />
        } else {
            return <SelectedTop 
                        weather={this.props.selectedDay.weather[0].main}
                        location={this.props.selectedDay.name}
                    />
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <SearchBar 
                    showLoadingIcon
                    onSubmitEditing={this.fetchTodayWeather.bind(this)}
                    value={this.state.searchValue}
                    onChangeText={(searchValue) => this.setState({searchValue})}
                    placeholder='Input City Name...'
                />

                <View style={{flex:1}}>
                    {this.renderSelectedTop()}
                </View>

                <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}>
                    <View style={{flex: 1}}>
                        <Button containerViewStyle={{marginLeft: 0, marginRight: 0}} title='Today' backgroundColor="rgba(90, 200, 250, 1)"/>
                    </View>
                    <View style={{flex: 1}}>
                        <Button containerViewStyle={{marginLeft: 0, marginRight: 0}} title='5 Days' backgroundColor="rgba(0, 122, 255, 1)"/>
                    </View>
                    <View style={{flex: 1}}>
                        {/* <Button containerViewStyle={{marginLeft: 0, marginRight: 0}} title='7 Days' backgroundColor="rgba(90, 200, 250, 1)"/> */}
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

const mapStateToProps = ({weatherReducer}) => {
    const {selectedDay} = weatherReducer;
    return {selectedDay};
}

export default connect(mapStateToProps, {fetchTodayWeather, fetchFiveWeather})(Home);