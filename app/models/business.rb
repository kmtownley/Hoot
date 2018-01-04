class Business < ApplicationRecord
  validates :biz_name, :address, :city, :state, :zipcode, :description, presence: true

  has_attached_file :image, default_url: "default_biz_image.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user, optional: true

  has_many :reviews


end
