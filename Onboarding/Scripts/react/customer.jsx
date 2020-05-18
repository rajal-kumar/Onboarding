import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CustomerList from './Components/Customer/CustomerList.jsx';

const app = document.getElementById('customer');
ReactDOM.render(<CustomerList />, app);