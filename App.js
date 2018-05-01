import React, { Component } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import Weather from "./Weather";

const API_KEY ="7936d881ea696bae536edbd52a905bcb";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
      this._getWeather(position.coords.latitude, position.coords.longitude)
    },
    error => {
      this.setState({
        error: "something went wrong"
      })
    }
    );
  }
  _getWeather = (lat, lng) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    })
  }
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? <Weather weatherName={name} temp={Math.floor(temperature - 273.15)} /> : ( //ceil은 올림
          <View style={styles.loading}>
            <Text style={styles.LoadingText}>Getting the weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading:{
    flex: 1,
    backgroundColor:'#FDF6AA',
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  LoadingText:{
    fontSize: 38,
    marginBottom: 100
  }
});
