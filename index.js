import React from "https://esm.sh/react@17.0.1";
import ReactDOM from "https://esm.sh/react-dom@17.0.1";
import {marked} from "https://esm.sh/marked";


marked.setOptions({
  breaks: true,
});

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here is some code of mine, \`<div></div>\`, between 2 backticks. Important for later #React!

**bold**... whoa! is fabulous!
Or _italic_. _Forza Italia!_
Or... wait for it... **_both!_**
**Errors?** ~~cross them out~~.

[links](https://www.freecodecamp.org), and
> Block Quotes! are provided too!

tables, here they are:

Header1 | Header2 | Header3?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

\`\`\`
Some code block
\`\`\`
`,
      preview: '',
    };
  }
  
  componentDidMount() {
    const { markdown } = this.state;
    const html = marked(markdown);
    this.setState({ preview: html });
  }

  onType = (event) => {
    const newText = event.target.value;
    const transformedText = marked(newText);

    this.setState({
      text: transformedText,
    });
  }
  
  handleChange = (event) => {
    const newText = event.target.value;
    const transformedText = marked(newText);

    this.setState({
      markdown: newText,
      preview: transformedText,
    });
  };

  
  render() {
    const { markdown, preview } = this.state;

    return (
      <div>
        <div className="editor-container">
          <h1>React Markdown Previewer</h1>
          <h2>Editor</h2>
          <textarea
            id="editor"
            value={markdown}
            onChange={this.handleChange}
            onInput={this.onType} />
        </div>
        <div className="preview-container">
          <h2>Previewer</h2>
          <div id="preview" dangerouslySetInnerHTML={{ __html: preview }} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Preview />, document.getElementById("root"));
