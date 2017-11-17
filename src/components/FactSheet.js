import React from 'react';
import {View, Text} from 'react-native';

const FactSheet = ({selectedDay}) => {
    if (Object.getOwnPropertyNames(selectedDay).length == 0) {
        return (<View style={styles.containerStyle}></View>)
    } else {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.innerContainerStyle}>
                    <View style={{flex: 1}}>
                        <View style={{borderBottomWidth: 1, padding: 10}}>
                            <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine:'underline'}}>Weather</Text>
                            <Text>{`Main: ${selectedDay.weather[0].main}`}</Text>
                            <Text>{`Description: ${selectedDay.weather[0].description}`}</Text>
                        </View>

                        <View style={{borderBottomWidth: 1, padding: 10}}>
                            <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine:'underline'}}>Wind</Text>
                            <Text>{`Speed: ${selectedDay.wind.speed}`}</Text>
                            <Text>{`Degree: ${selectedDay.wind.deg}`}</Text>
                        </View>
                        
                    </View>
                    <View style={{flex: 1, paddingLeft: 10}}>
                        <View style={{padding: 10}}>
                            <Text style={{fontWeight: 'bold', fontSize: 20, textDecorationLine:'underline'}}>Main</Text>
                            <Text>{`Temperature: ${selectedDay.main.temp}`}</Text>
                            <Text>{`Temperature Min: ${selectedDay.main.temp_min}`}</Text>
                            <Text>{`Temperature Max: ${selectedDay.main.temp_max}`}</Text>
                            <Text>{`Pressure: ${selectedDay.main.pressure}`}</Text>
                            <Text>{`Humidity: ${selectedDay.main.humidity}`}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: "rgba(90, 200, 250, 1)",
        
        
    },
    innerContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10
    }
}

export default FactSheet;