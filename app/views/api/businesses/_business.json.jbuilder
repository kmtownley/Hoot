json.extract! business, :id, :biz_name, :rating, :cuisine, :address, :city, :state, :zipcode, :phone_number, :latitude, :longitude, :price


json.image_url image_url(business.image.url)

debugger
