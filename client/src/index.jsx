import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import $ from 'jquery';

$('#startupMessage').html('');
var appEl = document.getElementById('app');




ReactDOM.render(<App />, appEl);