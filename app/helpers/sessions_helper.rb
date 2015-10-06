module SessionsHelper
  def login(user)
    session[:user_id] = user.id
  end

  def current_user
    @current_user = User.where(id: session[:user_id]).first if session[:user_id]
  end

end
