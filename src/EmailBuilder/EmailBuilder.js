import React, { Component } from 'react';
import EmailEditor from 'react-email-editor'
class EmailBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <EmailEditor
                    ref={editor => this.editor = editor}
                />
            </div>
        );
    }
}

export default EmailBuilder;