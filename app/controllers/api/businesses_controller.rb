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
    if (!params[:areaQuery] || !params[:contentQuery])
      @businesses = Business.all

    elsif (params[:contentQuery] != "" && params[:areaQuery] != "")
      @bizName = Business.where(biz_name: params[:contentQuery])
      @cuisineType = Business.where("LOWER(cuisine) LIKE LOWER(:cuisine)", cuisine: "%#{params[:contentQuery]}%")
      @bizCity = Business.where("LOWER(city) LIKE LOWER(:city)", city: "%#{params[:areaQuery]}%")
      @bizState = Business.where(state: params[:areaQuery])
      @businesses = @bizCity.or(@bizState).or(@bizCity).or(@bizState)
    elsif (params[:contentQuery] != "")
      @bizName = Business.where("LOWER(biz_name) LIKE LOWER(:biz_name)", biz_name: "%#{params[:contentQuery]}%")
      # Business.where("biz_name LIKE %e%")

      @cuisineType = Business.where(cuisine: params[:contentQuery])
      @businesses = @bizName.or(@cuisineType)
    elsif (params[:areaQuery] != "")
      @bizCity = Business.where("LOWER(city) LIKE LOWER(:city)", city: "%#{params[:areaQuery]}%")
      @bizState = Business.where(state: params[:areaQuery])
      @businesses = @bizCity.or(@bizState)
    else
      @businesses = Business.all
    # bounds ? Business.in_bounds(bounds) : Business.all
    end
    # render :index
  end

  private

  def business_params
    params.require(:business).permit(:biz_name, :address, :city, :state, :zipcode, :phone_number, :latitude, :longitude, :price)
  end

  def bounds
    params[:bounds]
  end
end
