# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.destroy_all

biz1 = Business.new(biz_name: "Chip NYC", address: "353 W 14th St Gansevoort Market", phone_number: "(212) 546-0978", city: "New York",  state: "NY", zipcode: "10014", cuisine: "Desert", rating: 4)
file=File.open("./app/assets/images/chip1.jpg")
biz1.image = file
biz1.save!

biz2 = Business.create!(biz_name: "Ginger and Lemongrass", phone_number: "(212) 432-1688", address: "816 Broadway", city: "New York",  state: "NY", zipcode: "10003", cuisine: "Thai", rating: 3)
file=File.open("./app/assets/images/lemon_ginger.jpg")
biz2.image = file
biz2.save!
biz3 = Business.create!(biz_name: "Outro", phone_number: "(646) 876-1237", address: "153 Rivington St", city: "New York",  state: "NY", zipcode: "10002", cuisine: "Cafe", rating: 5)
file=File.open("./app/assets/images/example_biz.jpg")
biz3.image = file
biz3.save!
biz4 = Business.create!(biz_name: "Amelie", phone_number: "(212)
533-2962", address: "22 W 8th St", city: "New York",  state: "NY", zipcode: "10011", cuisine: "French", rating: 4)
file=File.open("./app/assets/images/amelie.jpg")
biz4.image = file
biz4.save!
biz5 = Business.create!(biz_name: "Tonchin NEW YORK", phone_number: "(646) 692-9912", address: "13 W 36th", city: "New York",  state: "NY", zipcode: "10018", cuisine: "American (New)", rating: 4)
file=File.open("./app/assets/images/tonchin.jpg")
biz5.image = file
biz5.save!
biz6 = Business.create!(biz_name: "The Smith", phone_number: "(212) 644-2700", address: "956 2nd Ave", city: "New York",  state: "NY", zipcode: "10022", cuisine: "Tapas Bar", rating: 3)
file=File.open("./app/assets/images/smith.jpg")
biz6.image = file
biz6.save!




User.destroy_all

user1 = User.create!(email: 'guest@hoot.com', password: "password", first_name: "guest", last_name: "guest")
user2 = User.create!(email: 'kati', password: "password", first_name: "Kati", last_name: "Townley")
user3 = User.create!(email: 'bobby@yahoo.com', password: "123456", first_name: "Bobby", last_name: "O'Conner")
user3 = User.create!(email: 'andrea.roselli@gmail.com', password: "hoothoot", first_name: "Andrea", last_name: "Townley")
user4 = User.create!(email: 'gwen.corner@denveru.com', password: "belieber", first_name: "Gwen", last_name: "Corner")
user5 = User.create!(email: 'mgntown@yahoo.com', password: "Dumbledore", first_name: "Megan", last_name: "Townley")
user6 = User.create!(email: 'stevo@yahoo.com', password: "broncos", first_name: "Steve", last_name: "Cookie")

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
