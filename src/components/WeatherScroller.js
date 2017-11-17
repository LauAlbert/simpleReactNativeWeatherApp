import React, {Component} from 'react';
import {FlatList, Text, View, TouchableNativeFeedback } from 'react-native';
import {Card, Avatar} from 'react-native-elements';
import { getWeatherImage } from '../actions/weather_icon';

class WeatherScroller extends Component {
    
    cardPress(index) {
        this.props.onPress(index);
    }


    render() {
        return(
            <View style={styles.containerStyle}>
                <FlatList
                    horizontal
                    data={this.props.dataList}
                    keyExtractor={(item, index) => index}
                    renderItem={({item, index}) => (
                        <TouchableNativeFeedback onPress={this.cardPress.bind(this, index)}>
                            <Card 
                                containerStyle={styles.cardContainerStyle} 
                                title= {this.props.currentList === "today" ? "Today" : item.dt_txt}
                            >
                                <View style={{alignItems: 'center'}}>
                                    <Avatar
                                        small
                                        rounded
                                        source={{uri: getWeatherImage(item.weather[0].id)}}
                                        activeOpacity={0.7}
                                    />
                                    <Text>{item.weather[0].main}</Text>
                                </View>
                                <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{textDecorationLine:'underline'}}>High</Text>
                                        <Text style={{fontSize:20}}>{item.main.temp_max}</Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{textDecorationLine:'underline'}}>Low</Text>
                                        <Text style={{fontSize:20}}>{item.main.temp_min}</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableNativeFeedback>
                    )}
                />
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1, 
        borderTopWidth: 1, 
        borderBottomWidth: 1,
        backgroundColor: "rgba(90, 200, 250, 1)"
  
    },
    cardContainerStyle: {
        flex: 1,
        width: 200,
        marginTop: 6, 
        marginBottom: 6,  
        marginLeft: 6, 
        marginRight: 6
    }
}

export default WeatherScroller;