import React from 'react'

class Editor extends React.Component{

    render(){

        return(
            <div className="col m-2">
                <h2 className="h4 p-2 mb-2 bg-light text-dark">Editor</h2>
                <textarea id="editor" className="textarea" onChange={this.props.handleEditor}>
                {this.props.editor}
                </textarea>
            </div>
        )
    }
}

export default Editor