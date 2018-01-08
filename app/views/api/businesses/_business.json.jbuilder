json.extract! business, :id, :biz_name, :rating, :cuisine, :address, :city, :state, :zipcode, :phone_number


json.image_url image_url(business.image.url)
