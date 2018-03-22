import React from 'react';
import { connect } from 'react-redux'
import Search from "./components/search";
import './App.css';

const App = (props) => {
    return (
      <div className="page-wrapper" id="app" style={props}>
        <Search />
      </div>
    );
}

const mapStateToProps = state => ({
  background: state.weatherReport.background
})


export default connect(mapStateToProps)(App)
