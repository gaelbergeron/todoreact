class TodoController < ApplicationController
  def show
    @todos = [
      {id: 109, description: 'Finalize passion project', done: false}, 

    ]
    return @todos
  end
end
