import React from 'react';
import Table from 'react-bootstrap/Table'
import kelvinToFahrenheit from 'kelvin-to-fahrenheit'

const Forecast = (props) => {

    var hasData = false
    if (props.forecastData) {
        hasData = true
    }

    return (
        <div>
            <h1>{props.city}</h1>
            <Table striped hover>
                <thead className="thead-dark">
                    <tr>
                        <th>Date</th>
                        <th>Temp</th>
                        <th>Pressure</th>
                    </tr>
                </thead>
                <tbody>
                    {hasData ? (
                        props.forecastData.map(day => (
                            <tr>
                                <td>{day.dt_txt}</td>
                                <td>{kelvinToFahrenheit(day.main.temp)} °F</td>
                                <td>{day.main.pressure}</td>
                            </tr>
                        ))) : (<tr></tr>)}
                </tbody>
            </Table>
        </div>
    );
};

export default Forecast;
