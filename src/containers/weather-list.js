import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from './chat';
import GoogleMap from './google_map';

class WeatherList extends Component {
    
    renderData(cityData){
        const temps = cityData.list.map( temperature => temperature.main.temp ) // return an array
        const pres = cityData.list.map( pres => pres.main.pressure ) // return an array
        const hum = cityData.list.map( humi => humi.main.humidity ) // return an array
        const { lat, lng } = cityData.city.coord
        return (
            <tr key={ cityData.city.name }>
                <td>
                    <GoogleMap lat={lat} lng={lng} />
                </td>
                <td>
                    <Chat data={temps} color="blue" units="K" />
                </td>
                <td>
                    <Chat data={pres} color="orange" units="hPa" />
                </td>
                <td>
                    <Chat data={hum} color="red" units="%" />
                </td>
                
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {/* from state */}
                    {this.props.weather.map(this.renderData)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
