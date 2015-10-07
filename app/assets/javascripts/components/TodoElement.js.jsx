var TodoElement = React.createClass({
  toggleState: function(){
    this.props.toggleState(this.props.id);
  },
  deleteTodo: function(){
    this.props.deleteTodo(this.props.id);
  },
  render: function(){
    var style = {};
    if (this.props.done) {
      style['color'] = 'green';
    } else {
      style['color'] = 'red';
    }
    return (
      <div>
      <h3 style={style} >{this.props.description}</h3>
      <button onClick={this.toggleState} className="btn btn-primary" type="button">{this.props.done? "Mark as Uncomplete" : "Mark as Complete"}</button>
      <button onClick={this.deleteTodo} className="btn btn-danger" type="button">Delete</button>
      </div>
      )
  }
});