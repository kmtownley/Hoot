class Photo < ApplicationRecord
  validates :business_id, presence: true
  has_attached_file :image, default_url: "extra_biz_default.jpeg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :business
end
