json.extract! business, :id, :biz_name, :rating, :cuisine, :address, :city, :state, :zipcode

json.image_url image_url(business.image.url)
