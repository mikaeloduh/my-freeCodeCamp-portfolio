var Input = React.createClass({
  getInitialState: function() {
    return { input: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"};
  },
  
  handleUserInput: function(e) {
    this.setState({input: e.target.value});
  },
  
  markedUp: function() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
    
    var markedOutput = marked(this.state.input,  {sanitize: true});
    return {__html: markedOutput};
  },
  
  render: function () {
    return (
      <div className="row">
        <div className="col-md-6 left" >
          <textarea  type="text" value={this.state.input} onChange={this.handleUserInput} />
        </div>
        <div className="col-md-6 right">
          <div dangerouslySetInnerHTML={this.markedUp()} />
        </div>
      </div>
    );
  }

});
  
ReactDOM.render(<Input />, document.getElementById('app') );
