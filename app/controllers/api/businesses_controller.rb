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
    rendered_bizs = []
    if (!params[:areaQuery] || !params[:contentQuery])
      @businesses = Business.all
    elsif (params[:contentQuery] != "" && params[:areaQuery] != "")
      @businesses = Business.where("(LOWER(cuisine) LIKE LOWER(:cuisine) OR LOWER(biz_name) LIKE LOWER(:biz_name)) AND (LOWER(city) LIKE LOWER(:city) OR LOWER(state) LIKE LOWER(:state))", cuisine: "%#{params[:contentQuery]}%", biz_name: "%#{params[:contentQuery]}%", city: "%#{params[:areaQuery]}%", state: "%#{params[:areaQuery]}%")
    elsif (params[:contentQuery] != "")
      @bizName = Business.where("LOWER(biz_name) LIKE LOWER(:biz_name)", biz_name: "%#{params[:contentQuery]}%")
      @cuisineType = Business.where("LOWER(cuisine) LIKE LOWER(:cuisine)", cuisine: "%#{params[:contentQuery]}%")
      @businesses = @bizName.or(@cuisineType)
    elsif (params[:areaQuery] != "")
      @bizCity = Business.where("LOWER(city) LIKE LOWER(:city)", city: "%#{params[:areaQuery]}%")
      @bizState = Business.where("LOWER(state) LIKE LOWER(:state)", state: "%#{params[:areaQuery]}%")
      @businesses = @bizCity.or(@bizState)
    else
      @businesses = Business.all
    end
    @businesses.each do |business|

    end

  end

  private

  def business_params
    params.require(:business).permit(:biz_name, :address, :city, :state, :zipcode, :phone_number, :latitude, :longitude, :price)
  end

  def bounds
    params[:bounds]
  end
end
