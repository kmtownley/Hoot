class Business < ApplicationRecord
  validates :biz_name, :address, :city, :state, :zipcode, :description, presence: true

  belongs_to :user, optional: true

  has_many :reviews


end
