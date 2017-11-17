import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { Avatar } from 'react-native-elements';

class SelectedTop extends Component {
    

    render() {
        const {weatherImage, weatherText, date, location, temperature} = this.props;
        return (
            <View style={styles.viewStyle}>
                <View style={styles.imageViewStyle}>
                    <Avatar
                        large
                        rounded
                        source={{uri: weatherImage}}
                        activeOpacity={0.7}
                    />
                    <Text style={{color: 'white'}}>{weatherText}</Text>
                </View>
                <View style={styles.descriptionViewStyle}>
                    <View style={{flex: 1}}>
                    <Text numberOfLines={1} style={{fontSize: 20, color: 'white'}}>{date}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent:'flex-end', alignItems: 'flex-end'}}>
                        <Text numberOfLines={1} style={{fontSize: 25, color: 'white'}}>{location}</Text>
                    </View>
                </View>
                <View style={styles.degreeViewStyle}>
                    <Text numberOfLines={1} style={{fontSize: 35, color: 'white'}}>{`${temperature}°F`}</Text>
                </View>
                
            </View>
        )
    }
}

SelectedTop.defaultProps = {weatherImage: null, weatherText: '', date: '', location: '', temperature: ''};

const styles = {
    viewStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "rgba(90, 200, 250, 1)",
        borderBottomWidth: 1
    },
    imageViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1
    },
    descriptionViewStyle: {
        flex: 2,
        padding: 10
    },
    degreeViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1
    },
}

export default SelectedTop;