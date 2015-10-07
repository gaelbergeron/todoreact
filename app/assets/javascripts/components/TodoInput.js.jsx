var TodoInput = React.createClass({
  getInitialState: function(){
    return{
      description: ""
    };
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onSubmit(this.state.description);
    this.setState({description: ""});
  },
  updateDescription: function(event){
    this.setState({description: event.target.value});
  },
  render: function(){
    return (
      <div id="input-container">
        <input value={this.state.description} onChange={this.updateDescription} id="input-field"></input>
        <button onClick={this.handleSubmit} className="btn btn-primary" type="button">Save</button>
      </div>
    );
  }
});