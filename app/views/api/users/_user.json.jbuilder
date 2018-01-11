json.extract! user, :id, :email, :first_name, :last_name, :city, :state

json.user_img asset_path(user.user_img.url)
