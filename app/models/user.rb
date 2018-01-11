class User < ApplicationRecord
  validates :email, :password_digest, :first_name, :last_name, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true

  before_validation :ensure_session_token

  has_many :posts
  has_many :businesses
  has_many :reviews

  attr_reader :password

  has_attached_file :user_img, default_url: "user_img_missing.png"
  validates_attachment_content_type :user_img, content_type: /\Aimage\/.*\Z/

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
