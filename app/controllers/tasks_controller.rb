class TasksController < ApplicationController
  def show
    if current_user
      @todos = @current_user.tasks
    end 
  end
end
