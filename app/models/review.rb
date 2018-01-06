class Review < ApplicationRecord
  validates :user_rating, :body, presence: true
  validates_uniqueness_of :user_id, scope: :business_id

  belongs_to :business
  belongs_to :user

end
