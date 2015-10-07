class TasksController < ApplicationController

  def show
    if current_user
      @todos = @current_user.tasks
    end 
  end

  def create
    @task = current_user.tasks.build(task_params)
    if @task.save
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @task = Task.find(params[:id])
    render json: @task
    @task.destroy
  end

  def update
    @task = Task.find(params[:id])
    if @task.done == false
      @task.update_attributes(done: true)
    else
      @task.update_attributes(done: false)
    end
    render json: @task
  end

  private
    def task_params
      params.require(:task).permit(:description, :done)
    end

end
