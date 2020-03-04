import React from 'react'
const marked = require('marked');

class Preview extends React.Component{

    render(){
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: function(code, language) {
              const hljs = require('highlight.js');
              const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
              return hljs.highlight(validLanguage, code).value;
            },
            pedantic: false,
            gfm: true,
            breaks: true,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
          });

        return(
            <div className="col m-2">
                <h2 className="h4 p-2 mb-2 bg-light text-dark">Preview</h2>
                <div id="preview" dangerouslySetInnerHTML={{__html:marked(this.props.editor)}}>                
                </div>
            </div>
        )
    }
}

export default Preview