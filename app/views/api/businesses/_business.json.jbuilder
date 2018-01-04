json.extract! business, :id, :biz_name, :rating, :cuisine, :address, :city, :state, :zipcode, :description

json.image_url image_url(business.image.url)
