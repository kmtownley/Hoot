class Api::ReviewsController < ApplicationController

  def new
    @review = Review.new
  end

  def index
    @reviews = Review.where(business_id: params[:business_id])
    render :index
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    user_id = current_user.id
    business_id = params[:business_id]
    @review = Review.new(review_params)
    if @review.save
      business = @review.business
      render json: business
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    business_id = @review.business_id
    @review.destroy
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    debugger
    @review = current_user.reviews.find(params[:id])
    if @review.update(review_params)
      business = @review.business
      render json: business
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:user_rating, :body, :user_id, :business_id, :id)
  end
end
