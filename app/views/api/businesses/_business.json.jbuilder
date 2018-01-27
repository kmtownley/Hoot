json.extract! business, :id, :biz_name, :rating, :cuisine, :address, :city, :state, :zipcode, :phone_number, :latitude, :longitude, :price, :mon_start_hr, :mon_end_hr, :tue_start_hr, :tue_end_hr, :wed_start_hr, :wed_end_hr, :thur_start_hr, :thur_end_hr, :fri_start_hr, :fri_end_hr, :sat_start_hr, :sat_end_hr,
:sun_start_hr, :sun_end_hr, :delivery


json.image_url image_url(business.image.url)
