import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import Routes from './Routes'
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase'


class App extends Component {

    componentWillMount() {
          firebase.initializeApp({
            apiKey: "AIzaSyBQdBus41R1_sONxE9Xc109hMk-5W9ULRo",
            authDomain: "goapp-11580.firebaseapp.com",
            databaseURL: "https://goapp-11580.firebaseio.com",
            projectId: "goapp-11580",
            storageBucket: "goapp-11580.appspot.com",
            messagingSenderId: "763384776513"
          });
    }
    
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>   
        );
    }
}

export default App;