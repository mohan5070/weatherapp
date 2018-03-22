import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getImageUrl } from "../utils/api";

const WeatherInfo = props => {
    let imageUrl = getImageUrl(props.weatherData.weather[0].icon);

    return (
        <div className="alert" role="alert">
        <div className="float-right">
            <p>Current Temperature</p>  
            <p className="big-text">{props.weatherData.main.temp}&deg;c </p>
        </div>
         <div className="float-left">
            <p><img src={imageUrl} alt={props.weatherData.weather[0].description}/> </p>
            <p>{props.weatherData.weather[0].description} </p>
            <p>Min-Max: {props.weatherData.main.temp_min}&deg;c - {props.weatherData.main.temp_max}&deg;c </p>
         </div>
         <div className="clearfix"></div>
        </div>
    );
};

WeatherInfo.propTypes = {
    weatherData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    weatherData: state.weatherReport.geocodeResults
});
  
export default connect(mapStateToProps)(WeatherInfo)
