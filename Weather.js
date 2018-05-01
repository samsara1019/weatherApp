import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo"; //view인데 배경색이 gradient인것
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "우산 챙기세요",
        icon: "weather-rainy"
    },
    Clear: {
        colors:["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "날이 좋아요",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstrom",
        subtitle: "천둥이쳐요!",
        icon: "weather-lightening"
    },
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "구름이 꼈어요",
        icon: "weather-cloudy"
    },
    Snow: {
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "눈이와요!",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "이슬비가 내려요",
        icon: "weather-hail"
    },
    Haze: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "안개가 꼈어요",
        icon: "weather-hail"
    },
    Mist: {
        colors:["#D7D2CC", "#304352"],
        title: "Mist",
        subtitle: "안개가 꼈어요",
        icon: "weather-fog"
    }
}

function Weather({ weatherName , temp }){
    return(
        <LinearGradient
            colors={weatherCases[weatherName].colors} //from-to 색상 지정
            style={styles.container} //스타일
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
});