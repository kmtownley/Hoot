class Business < ApplicationRecord
  validates :biz_name, :address, :city, :state, :zipcode, presence: true

  has_attached_file :image, default_url: "default_biz_image.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  # geocoded_by :address + " " + :city + " " + :state
  # after_validation :geocode

  belongs_to :user, optional: true
  has_many :reviews
  has_many :photos

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end


end
