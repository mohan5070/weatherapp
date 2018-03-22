import React from 'react';

export const renderSuggestion = ({ formattedSuggestion }) => (
    <div className="suggestion-item">
        <i className="fa fa-map-marker suggestion-icon" />
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small className="text-muted">{formattedSuggestion.secondaryText}</small>
    </div>
);
  
export const renderFooter = () => (
    <div className="dropdown-footer"></div>
);

export const cssClasses = {
    root: 'form-group',
    input: 'search-input',
    autocompleteContainer: 'autocomplete-container',
};

export const shouldFetchSuggestions = ({ value }) => value.length > 2;

export const onError = (status, clearSuggestions) => {
    /* eslint-disable no-console */
    console.log(
        'Error happened while fetching suggestions from Google Maps API',
        status
    );
    /* eslint-enable no-console */
    clearSuggestions();
};