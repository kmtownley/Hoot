json.partial! "api/businesses/business", business: @business

json.image0 asset_path(@business.photos[0].image)
json.image1 asset_path(@business.photos[1].image)
