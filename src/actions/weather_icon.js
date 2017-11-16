import _ from 'lodash';

const weatherIcon = [
    {id: 2, image:'http://openweathermap.org/img/w/11d.png'},
    {id: 3, image:'http://openweathermap.org/img/w/09d.png'},
    {id: 5, image:'http://openweathermap.org/img/w/10d.png'},
    {id: 6, image:'http://openweathermap.org/img/w/13d.png'},
    {id: 7, image:'http://openweathermap.org/img/w/50d.png'},
    {id: 800, image:'http://openweathermap.org/img/w/01d.png'},
    {id: 801, image:'http://openweathermap.org/img/w/02d.png'},
    {id: 802, image:'http://openweathermap.org/img/w/03d.png'},
    {id: 803, image:'http://openweathermap.org/img/w/04d.png'},
    {id: 804, image:'http://openweathermap.org/img/w/04d.png'}
]

export const getWeatherImage = (number) => {
    const firstDigit = String(number)[0];
    console.log(firstDigit)
    if(number==8) {
        return (_.filter(weatherIcon,{ id: parseInt(number) })[0].image);
    } else {
        return (_.filter(weatherIcon,{ id: parseInt(firstDigit) })[0].image);
    }
}