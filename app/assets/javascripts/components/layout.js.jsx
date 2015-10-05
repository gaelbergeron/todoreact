var TodoApp = React.createClass({
  getDefaultProps: function(){
    return {
      todos: []
    };
  },
  getInitialState: function(){
    return {
      todos: this.props.todos,
    };
  },
  toggleTodoState: function(id){
    var todos = this.state.todos;
    var newTodos = todos.map(function(todo){
      if (todo.id === id){ 
        todo.done = !todo.done 
      }
      return todo;
    });
    return this.setState({
      todos: newTodos
    });
  },
  createElement: function(description){
    var newTodo = {id: Math.floor(Math.random()*1000), description: description, done: false };
    var todos = this.state.todos;
    todos.push(newTodo);
    return this.setState({
      todos: todos
    });
  },

  deleteElement: function(id){
    var todos = this.state.todos;
    var index;
    var updatedTodos = todos.map(function(todo){
      if (todo.id === id){
        index = todos.indexOf(todo)
      }
    });
    todos.splice(index, 1);
    return this.setState({
      todos: todos
    });
  },

  render: function(){
    var self = this;
    var todos = this.state.todos;
    var taskList = todos.map(function(todo){ 
      return <TodoElement description={todo.description} done={todo.done} id={todo.id} toggleState={self.toggleTodoState} deleteTodo={self.deleteElement} />;
    });
    return (
      <div>
        <div>
          {taskList}
          <TodoInput onSubmit={this.createElement} />
        </div>
      </div>
    );
  }
});

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
      <button onClick={this.toggleState}>{this.props.done? "Reset" : "Mark as Complete"}</button>
      <button onClick={this.deleteTodo}>Delete</button>
      </div>
      )
  }
});

var TodoInput = React.createClass({
  getInitialState: function(){
    return{
      description: ""
    };
  },
  handleSubmit: function(){
    this.props.onSubmit(this.state.description);
    this.setState({description: ""});
  },
  updateDescription: function(event){
    this.setState({description: event.target.value});
  },
  render: function(){
    return (
      <div>
        <textarea value={this.state.description} onChange={this.updateDescription} ></textarea>
        <button onClick={this.handleSubmit} >Save</button>
      </div>
    );
  }
})



