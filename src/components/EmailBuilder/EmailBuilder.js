import React, { Component } from 'react';
import EmailEditor from 'react-email-editor'

import sample from '../../assets/sample.json'
class EmailBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    exportHtml = () => {
        this.editor.exportHtml(data => {
            const { design, html } = data
            console.log('exportHtml', html)
        })
    }
    onDesignLoad = (data) => {
        console.log('onDesignLoad', data);
    };

    saveDesign = () => {
        this.editor.saveDesign(design => {
            console.log('saveDesign', design)
        })
    }

    onLoad = () => {
        // " DESIGN JSON GOES HERE "
        const json = sample
        this.editor.addEventListener(
            'onDesignLoad',
            this.onDesignLoad
        );
        this.editor.loadDesign(json)
        console.log('onLoad', json)
    }

    render() {
        return (
            <div>
                <button onClick={this.saveDesign}>Save Design</button>
                <button onClick={this.exportHtml}>Export HTML</button>

                <EmailEditor
                    ref={editor => this.editor = editor}
                    onLoad={this.onLoad}
                />
            </div>
        );
    }
}

export default EmailBuilder;