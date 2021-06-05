import React, { Component } from 'react';
import EmailBuilder from '../EmailBuilder/EmailBuilder'
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <EmailBuilder />
        );
    }
}

export default MainPage;