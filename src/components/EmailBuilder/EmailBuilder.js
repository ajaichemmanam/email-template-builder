import React, { Component } from 'react';
import EmailEditor from 'react-email-editor'

import sample from '../../assets/sample.json'
class EmailBuilder extends Component {
    constructor(props) {
        super(props);
        // console.log('EmailBuilderProps', props)
        this.state = {
            isEditing: props.edit,
            templateNameEditing: false,
            templateName: props.templateData ? props.templateData.name : "",
            template: props.templateData ? props.templateData.template : ""
        };
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
        if (this.state.isEditing) {
            if (this.editor && this.editor.loadDesign) {
                this.editor.loadDesign(this.state.template)
            } else if (window.unlayer) window.unlayer.loadDesign(this.state.template)


        } else {
            if (this.editor && this.editor.loadBlank) {
                this.editor.loadBlank();
            } else if (window.unlayer) window.unlayer.loadBlank();
        }

    }

    onDesignLoad(data) {
        console.log('onDesignLoad', data)
    }

    render() {
        return (
            <div>
                {this.state.templateNameEditing ?
                    (
                        <div>
                            <input onChange={(evt) => { this.setState({ templateName: evt.target.value }) }} type="text" value={this.state.templateName} />
                            <button onClick={(evt) => { this.setState({ templateNameEditing: !this.state.templateNameEditing }) }}>Save Name</button>
                        </div>
                    )
                    :
                    (
                        <div onClick={(evt) => { this.setState({ templateNameEditing: !this.state.templateNameEditing }) }}>
                            <h1>
                                {this.state.templateName}
                            </h1>
                        </div>
                    )
                }
                <button onClick={this.saveDesign}>Save Design</button>
                <button onClick={this.exportHtml}>Export HTML</button>

                <EmailEditor
                    ref={editor => this.editor = editor}
                    appearance={{ theme: 'dark' }}
                    onLoad={this.onLoad}
                    onDesignLoad={this.onDesignLoad}
                />
            </div>
        );
    }
}

export default EmailBuilder;