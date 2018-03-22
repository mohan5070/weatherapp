import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as weatherActions from "../actions/weatherAction";
import { renderSuggestion, renderFooter, cssClasses, shouldFetchSuggestions, onError } from "../utils/common";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import WeatherInfo from "./weatherInfo";

class Search extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      address: '',
      geocodeResults: null,
      loading: false,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSelect(address) {
    this.setState({
      address,
      loading: true,
  });
  

  geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        this.props.actions.fetchWeatherInfo(lat, lng)
      })
      .catch(error => {
       console.log(error)
      });
  }

  handleChange(address) {
    this.props.actions.setInitialState();
    this.setState({
      address
    });
  }

  render() {
    const inputProps = {
      type: 'text',
      value: this.state.address,
      onChange: this.handleChange,
      autoFocus: true,
      placeholder: 'Search Places',
      name: 'input',
      id: 'my-input-id',
    };

    return (
      <div>
        <PlacesAutocomplete
          renderSuggestion={renderSuggestion}
          renderFooter={renderFooter}
          inputProps={inputProps}
          classNames={cssClasses}
          onSelect={this.handleSelect}
          onEnterKeyDown={this.handleSelect}
          onError={onError}
          shouldFetchSuggestions={shouldFetchSuggestions}
        />
        {this.props.geocodeResults && (
          <div className="geocoding-results"><WeatherInfo /></div>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  background: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  background: state.weatherReport.background,
  geocodeResults: state.weatherReport.geocodeResults
});

const mapDispatchToProps =  dispatch =>({
    actions: bindActionCreators(weatherActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)
