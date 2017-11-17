import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Dimensions} from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import SelectedTop from '../components/SelectedTop';
import WeatherScroller from '../components/WeatherScroller';
import FactSheet from '../components/FactSheet';
import { fetchTodayWeather, fetchFiveWeather, switchList, selectDay } from '../actions';
import { getWeatherImage } from '../actions/weather_icon';

const width = Dimensions.get('window').width;

class Home extends Component {
    state = {
        searchValue: ""
    }

    fetchTodayWeather() {
        this.props.fetchTodayWeather(this.state.searchValue);
        this.props.fetchFiveWeather(this.state.searchValue);
    }

    renderSelectedTop() {
        if(Object.getOwnPropertyNames(this.props.selectedDay).length == 0){
            return <SelectedTop />
        } else {
            return <SelectedTop
                        date={this.props.currentList === "today" ? "Today" : this.props.selectedDay.dt_txt}
                        weatherImage={getWeatherImage(this.props.selectedDay.weather[0].id)}
                        weatherText={this.props.selectedDay.weather[0].main}
                        location={this.props.city}
                        temperature={Math.round(this.props.selectedDay.main.temp)}
                    />
        }
    }
    switchList(listName) {
        this.props.switchList(listName);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <SearchBar 
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
                        <Button 
                            disabled={Object.getOwnPropertyNames(this.props.selectedDay).length == 0} 
                            onPress={this.switchList.bind(this, "today")} 
                            containerViewStyle={{marginLeft: 0, marginRight: 0}} 
                            title='Today' 
                            backgroundColor="rgba(90, 200, 250, 1)"
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <Button
                            disabled={Object.getOwnPropertyNames(this.props.selectedDay).length == 0} 
                            onPress={this.switchList.bind(this, "five")} 
                            containerViewStyle={{marginLeft: 0, marginRight: 0}} 
                            title='5 Days' 
                            backgroundColor="rgba(0, 122, 255, 1)"
                        />
                    </View>
                    <View style={{flex: 1}}>
                        {/* <Button containerViewStyle={{marginLeft: 0, marginRight: 0}} title='7 Days' backgroundColor="rgba(90, 200, 250, 1)"/> */}
                    </View>
                </View>

                <View style={{flex:2}}>
                    <WeatherScroller 
                        currentList={this.props.currentList} 
                        dataList={this.props.focusList}
                        onPress={this.props.selectDay}
                    />
                </View>

                <View style={{flex:3}}>
                    <FactSheet selectedDay={this.props.selectedDay} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = ({weatherReducer}) => {
    const {selectedDay, city, currentList, focusList} = weatherReducer;
    return {selectedDay, city, currentList, focusList};
}

export default connect(mapStateToProps, {fetchTodayWeather, fetchFiveWeather, switchList, selectDay})(Home);