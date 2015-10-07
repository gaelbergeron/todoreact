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
    $.ajax({
      url: '/tasks/' + id,
      dataType: 'json',
      type: 'patch',
      data: {task: {id: id}},
      success: function(updatedTodo){
        console.log(updatedTodo);
        var todos = this.state.todos;
        var newTodos = todos.map(function(todo){
          if (todo.id === updatedTodo.id){ 
            todo.done = !todo.done 
          }
          return todo;
        });
        return this.setState({
          todos: newTodos
        });
      }.bind(this)
    });
  },
  createElement: function(description){
    $.ajax({
      url: '/tasks',
      dataType: 'json',
      type: 'post',
      data: {task: {description: description, done: 'false' }},
      success: function(newTodo) {
        var todos = this.state.todos
        todos.push(newTodo)
        this.setState({todos: todos});
      }.bind(this)
    });
  },
  deleteElement: function(id){
    $.ajax({
      url: '/tasks/' + id,
      dataType: 'json',
      type: 'delete',
      data: {task: {id: id}},
      success: function(deletedTodo) {
        var todos = this.state.todos;
        var index;
        var updatedTodos = todos.map(function(todo){
          if (todo.id === deletedTodo.id){
            index = todos.indexOf(todo)
          }
        });
        todos.splice(index, 1);
        return this.setState({
          todos: todos
        });
      }.bind(this)
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