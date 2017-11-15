import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Card} from 'react-native-elements';

class WeatherScroller extends Component {
    render() {
        return(
            <View style={styles.containerStyle}>
                <FlatList
                    horizontal
                    data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]}
                    renderItem={({item}) => (
                        <Card containerStyle={styles.cardContainerStyle} title="CARD WITH DIVIDER">
                            <Text>{item.key}</Text>
                        </Card>
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
        borderBottomWidth: 1
  
    },
    cardContainerStyle: {
        flex: 1,
        marginTop: 6, 
        marginBottom: 6,  
        marginLeft: 6, 
        marginRight: 6
    }
}

export default WeatherScroller;