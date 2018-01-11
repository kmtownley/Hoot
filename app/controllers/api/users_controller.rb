class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = current_user
    if (current_user.id != @user.id)
      render json: ["You can only update your own profile silly"]
    elsif (@user.update(user_params))
      render :show
    else
      render json: @user.errros.full_messages, status: 422
    end
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :city, :state, :zipcode, :image_url)
  end
end
