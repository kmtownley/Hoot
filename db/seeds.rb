# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.destroy_all

biz1 = Business.new(biz_name: "Chip NYC", address: "353 W 14th St Gansevoort Market", phone_number: "(212) 546-0978", city: "New York",  state: "NY", zipcode: "10014", cuisine: "Desert", price: 2, rating: 4, latitude: 40.740905, longitude: -74.004708)
file=File.open("./app/assets/images/chip1.jpg")
biz1.image = file
biz1.save!

biz2 = Business.create!(biz_name: "Ginger and Lemongrass", phone_number: "(212) 432-1688", address: "816 Broadway", city: "New York",  state: "NY", zipcode: "10003", cuisine: "Thai", price: 2, rating: 3, latitude: 40.732762, longitude: -73.990936)
file=File.open("./app/assets/images/lemon_ginger.jpg")
biz2.image = file
biz2.save!
biz3 = Business.create!(biz_name: "Outro", phone_number: "(646) 876-1237", address: "153 Rivington St", city: "New York",  state: "NY", zipcode: "10002", cuisine: "Cafe", price: 4, rating: 5, latitude: 40.719116, longitude: -73.985672)
file=File.open("./app/assets/images/example_biz.jpg")
biz3.image = file
biz3.save!
biz4 = Business.create!(biz_name: "Amelie", phone_number: "(212)
533-2962", address: "22 W 8th St", city: "New York",  state: "NY", zipcode: "10011", cuisine: "French", price: 4, rating: 4,latitude: 40.7629471996736, longitude: -73.97823811645509)
file=File.open("./app/assets/images/amelie.jpg")
biz4.image = file
biz4.save!
biz5 = Business.create!(biz_name: "Tonchin NEW YORK", phone_number: "(646) 692-9912", address: "13 W 36th", city: "New York",  state: "NY", zipcode: "10018", cuisine: "American (New)", price: 5, rating: 4)
file=File.open("./app/assets/images/tonchin.jpg", latitude: 40.759223, longitude: -73.952605 )
biz5.image = file
biz5.save!
biz6 = Business.create!(biz_name: "The Smith", phone_number: "(212) 644-2700", address: "956 2nd Ave", city: "New York",  state: "NY", zipcode: "10022", cuisine: "Tapas Bar", price: 4, rating: 3, latitude: 40.740905, longitude: -74.004708 )
file=File.open("./app/assets/images/smith.jpg")
biz6.image = file
biz6.save!
biz7 = Business.create!(biz_name: "La Contenta Oeste", phone_number: "(212) 544-2740", address: "78 W 11th St", city: "New York",  state: "NY", zipcode: "10022", cuisine: "Mexican", price: 2, rating: 3, latitude: 40.735148, longitude: -73.998075)
file=File.open("./app/assets/images/oeste.jpg")
biz7.image = file
biz7.save!
biz8 = Business.create!(biz_name: "Thai Villa", phone_number: "(212) 645-2720", address: "5 E 19th St", city: "New York",  state: "NY", zipcode: "10042", cuisine: "Thai", price: 3, rating: 3, latitude: 40.739008, longitude: -73.990664 )
file=File.open("./app/assets/images/thai_villa.jpg")
biz8.image = file
biz8.save!
biz9 = Business.create!(biz_name: "Wafa's", phone_number: "(212) 644-2700", address: "812 Grand St", city: "Brooklyn",  state: "NY", zipcode: "11211", cuisine: "Vegetarian", price: 2, rating: 1, latitude: 40.714770, longitude: -74.072011 )
file=File.open("./app/assets/images/wafas.jpg")
biz9.image = file
biz9.save!
biz10 = Business.create!(biz_name: "Soco", phone_number: "(212) 634-2900", address: "509 Myrtle Ave", city: "Brooklyn",  state: "NY", zipcode: "10044", cuisine: "Cajun", price: 3, rating: 4, latitude: 40.693846, longitude: -73.964513 )
file=File.open("./app/assets/images/soco.jpg")
biz6.image = file
biz6.save!




User.destroy_all

user1 = User.new(email: 'guest@hoot.com', password: "password", first_name: "guest", last_name: "guest", city: "New York", state: "NY")
file=File.open("./app/assets/images/harry.jpg", zipcode: 10023)
user1.user_img = file
user1.save!
user2 = User.create!(email: 'kati', password: "password", first_name: "Kati", last_name: "Townley", city: "New York", state: "NY")
file=File.open("./app/assets/images/hermione.jpg", zipcode: 10023)
user2.user_img = file
user2.save!
user3 = User.create!(email: 'bobby@yahoo.com', password: "123456", first_name: "Bobby", last_name: "O'Conner", city: "New York", state: "NY",  zipcode: 10023)
file=File.open("./app/assets/images/ron.jpg")
user3.user_img = file
user3.save!
user4 = User.create!(email: 'andrea.roselli@gmail.com', password: "hoothoot", first_name: "Andrea", last_name: "Townley", city: "Brooklyn", state: "NY", zipcode: 10023)
file=File.open("./app/assets/images/dumbledore.jpg")
user4.user_img = file
user4.save!
user5 = User.create!(email: 'gwen.corner@denveru.com', password: "belieber", first_name: "Gwen", last_name: "Corner", city: "Brooklyn", state: "NY", zipcode: 10027)
file=File.open("./app/assets/images/snape.jpg")
user5.user_img = file
user5.save!
user6 = User.create!(email: 'mgntown@yahoo.com', password: "Dumbledore", first_name: "Megan", last_name: "Townley", city: "New York", state: "NY", zipcode: 10044)
file=File.open("./app/assets/images/mcgon.jpg")
user6.user_img = file
user6.save!
user7 = User.create!(email: 'stevo@yahoo.com', password: "broncos", first_name: "Steve", last_name: "Cookie", city: "Indianapolis", state: "IN", zipcode: 10013)

Review.destroy_all

Review.create!(user_id: user1.id, business_id: biz1.id, user_rating: 4, body: "What a wonderful slice of heaven! I am quite the cookie afficionado and all I can say is wow!!! Thank goodness I don't live very close or else I would be in trouble. Make sure to try the double fudge explosion. It will blow your mind.")
Review.create!(user_id: user1.id, business_id: biz2.id, user_rating: 5, body: "Ginger and Lemongrass is one of my favorite spots in all of the city. It always has spectacular service and the menu is seasonal and fresh all year roud. Make sure to make reservations as it can be crowded on the weekends.")
Review.create!(user_id: user1.id, business_id: biz3.id, user_rating: 4, body: "Great little cafe with wonderful outdoor seating. The ambience is laid back and the coffee is addicting.")
Review.create!(user_id: user2.id, business_id: biz1.id, user_rating: 4, body: "Can't get enough of these cookies!! They are fantastic.")
Review.create!(user_id: user2.id, business_id: biz4.id, user_rating: 3, body: "I feel like this place doesn't live up to all of the hype. Definitely not worth the money. And the service is spotty at best.")
Review.create!(user_id: user3.id, business_id: biz5.id, user_rating: 4, body: "Can't go wrong with this new American eatery. The menu is innovative but has enough traditional options to please everyone in your group. Already looking forward to my next meal there.")
Review.create!(user_id: user3.id, business_id: biz2.id, user_rating: 5, body: "If you like Thai you absolutely must try Ginger and Lemongrass. Their greem curry is unparallelled.")
Review.create!(user_id: user4.id, business_id: biz6.id, user_rating: 5, body: "Simply spectacular. The plates are a bit on the pricey side but totally worth the experience. I've been a fan of the head chef for years and he continues to impress.")
Review.create!(user_id: user5.id, business_id: biz4.id, user_rating: 4, body: "If you like authentic French cuisine you will not be disappointed. Don't miss their French Onion Soup. ")
Review.create!(user_id: user5.id, business_id: biz3.id, user_rating: 3, body: "Outro always too crowded for my taste. It took over an hour to receive our drinks. Will definitely not be returning.")
