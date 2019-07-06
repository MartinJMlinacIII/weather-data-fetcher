import React from 'react';

import Containter from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ZipcodeForm from './ZipcodeForm';
import Forecast from './Forecast';

class App extends React.Component {
  getForecast = async (e) => {
    try {
      e.preventDefault();
      const appid = '9e8da6d7dc2e655dd86de6f5a5483148'
      const zipcode = e.target.elements.zipcode.value;
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&appid=${appid}`);
      const response = await api_call.json();
      if (zipcode) {
        this.setState({
          city: response.city.name,
          list: response.list,
          error: "",
          isLoaded: true,
        })
      }
      else {
        this.setState({
          error: "Please enter a zipcode.",
          isLoaded: false,
        })
      }
      console.log(response.list);
    } catch (error) {
      this.setState({
        error: "Not a valid zip code. Please try again",
        isLoaded: false,
      })
      window.alert("Not a valid zip code. Please try again.");
    }

  }

  state = {
    city: undefined,
    list: undefined,
    error: undefined,
    isLoaded: false,
  }

  render() {
    return (
      <Containter>
        <Row>
          <Col md="12">
            <ZipcodeForm loadForecast={this.getForecast} />
          </Col>
          {this.state.isLoaded ? (
            <Col md="12">
              <Forecast city={this.state.city} forecastData={this.state.list} />
            </Col>
          ) : (<Col md="12"></Col>
            )}
        </Row>
      </Containter>
    )
  }
}
export default App;