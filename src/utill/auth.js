
import React, { Component } from 'react';
import auth0 from 'auth0-js';

export default class Auth extends Component {
    auth0 = new auth0.WebAuth({
        domain:'webapp1.auth0.com',
        clientID:'dev-6wm-o5el.us.auth0.com',
        redirectUri:'OdqscEr9au3vSXRaYYU9GgpHoXQS8iDe',
        responseType:'token id_token',
        scope:'openid profile email'
    })
    login = () => {
        this.auth0.authorize();
    }
}
