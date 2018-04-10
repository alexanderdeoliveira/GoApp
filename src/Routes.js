import React from 'react';
import{ Router, Scene } from 'react-native-router-flux';

import Login from './components/Login';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#0094e5', borderBottomColor: "#FFFFFF" }} titleStyle={{ color: '#fff', fontWeight: 'bold' }} >
        <Scene key='Login' component={Login} hideNavBar={ true }  />
    </Router>
);