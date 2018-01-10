class Api::BusinessesController < ApplicationController

  def create
    @business = Business.new(business_params)
    @business.owner_id = current_user.id
    if @business.save!
      render :show
    else
      render json @business.errors.full_messages, status: 422
    end
  end

  def destroy
    business = Business.find(params[:id])
    if currentUser.businesses.include?(business)
      business.destroy
      render 'api/users/show'
    else
      render json: ['Sorry, you must be the owner to delete.'], status: 401
    end
  end

  def search

  end

  def update
  end

  def edit
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end

  def index
    if (params[:query])
      @bizName = Business.where(biz_name: params[:query])
      @cuisineType = Business.where(cuisine: params[:query])
      debugger
      @businesses = @bizName.or(@cuisineType)

    else
    @businesses = Business.all
    # bounds ? Business.in_bounds(bounds) : Business.all
    end
    render :index
  end

  private

  def business_params
    params.require(:business).permit(:biz_name, :address, :city, :state, :zipcode, :phone_number, :latitude, :longitude)
  end

  def bounds
    params[:bounds]
  end
end
