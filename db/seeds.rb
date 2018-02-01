# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.destroy_all

biz1 = Business.new(biz_name: "Chip NYC", address: "353 W 14th St Gansevoort Market", phone_number: "(212) 546-0978", city: "New York",  state: "NY", zipcode: "10014", cuisine: "Desert", price: 2, rating: 4, latitude: 40.740905, longitude: -74.004708, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 8, tue_end_hr: 20, wed_start_hr: 8, wed_end_hr: 20, thur_start_hr: 8, thur_end_hr: 20, fri_start_hr: 8, fri_end_hr: 22, sat_start_hr: 8, sat_end_hr: 23, sun_start_hr: 12, sun_end_hr: 20, delivery: false)
file=File.open("./app/assets/images/chip1.jpg")
biz1.image = file
biz1.save!

biz2 = Business.create!(biz_name: "Ginger and Lemongrass", phone_number: "(212) 432-1688", address: "816 Broadway", city: "New York",  state: "NY", zipcode: "10003", cuisine: "Thai", price: 3, rating: 5, latitude: 40.732762, longitude: -73.990936, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 10, tue_end_hr: 22, wed_start_hr: 10, wed_end_hr: 22, thur_start_hr: 10, thur_end_hr: 22, fri_start_hr: 10, fri_end_hr: 23, sat_start_hr: 8, sat_end_hr: 23, sun_start_hr: 12, sun_end_hr: 18, delivery: true)
file=File.open("./app/assets/images/lemon_ginger.jpg")
biz2.image = file
biz2.save!
biz3 = Business.create!(biz_name: "Outro", phone_number: "(646) 876-1237", address: "153 Rivington St", city: "New York",  state: "NY", zipcode: "10002", cuisine: "Cafe", price: 4, rating: 5, latitude: 40.719116, longitude: -73.985672, mon_start_hr: 11, mon_end_hr: 20,
tue_start_hr: 11, tue_end_hr: 20, wed_start_hr: 11, wed_end_hr: 20, thur_start_hr: 11, thur_end_hr: 20, fri_start_hr: 11, fri_end_hr: 22, sat_start_hr: 11, sat_end_hr: 23, sun_start_hr: 12, sun_end_hr: 18, delivery: false)
file=File.open("./app/assets/images/example_biz.jpg")
biz3.image = file
biz3.save!
biz4 = Business.create!(biz_name: "Amelie", phone_number: "(212)
533-2962", address: "22 W 8th St", city: "New York",  state: "NY", zipcode: "10011", cuisine: "French", price: 4, rating: 4,latitude: 40.7629471996736, longitude: -73.97823811645509, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 8, tue_end_hr: 20, wed_start_hr: 8, wed_end_hr: 20, thur_start_hr: 8, thur_end_hr: 20, fri_start_hr: 8, fri_end_hr: 22, sat_start_hr: 8, sat_end_hr: 23, sun_start_hr: 12, sun_end_hr: 20, delivery: true)
file=File.open("./app/assets/images/amelie.jpg")
biz4.image = file
biz4.save!
biz5 = Business.create!(biz_name: "Tonchin NEW YORK", phone_number: "(646) 692-9912", address: "13 W 36th", city: "New York",  state: "NY", zipcode: "10018", cuisine: "American (New)", price: 4, rating: 4, latitude: 40.759223, longitude: -73.935242, mon_start_hr: 10, mon_end_hr: 20,
tue_start_hr: 10, tue_end_hr: 20, wed_start_hr: 10, wed_end_hr: 20, thur_start_hr: 10, thur_end_hr: 20, fri_start_hr: 10, fri_end_hr: 24, sat_start_hr: 10, sat_end_hr: 24, sun_start_hr: 12, sun_end_hr: 20, delivery: true)
file=File.open("./app/assets/images/tonchin.jpg")
biz5.image = file
biz5.save!
biz6 = Business.create!(biz_name: "The Smith", phone_number: "(212) 644-2700", address: "956 2nd Ave", city: "New York",  state: "NY", zipcode: "10022", cuisine: "Tapas Bar", price: 4, rating: 3, latitude: 40.740905, longitude: -74.004708, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 8, tue_end_hr: 20, wed_start_hr: 8, wed_end_hr: 20, thur_start_hr: 8, thur_end_hr: 20, fri_start_hr: 8, fri_end_hr: 22, sat_start_hr: 8, sat_end_hr: 23, sun_start_hr: 12, sun_end_hr: 20, delivery: false)
file=File.open("./app/assets/images/smith.jpg")
biz6.image = file
biz6.save!
biz7 = Business.create!(biz_name: "La Contenta Oeste", phone_number: "(212) 544-2740", address: "78 W 11th St", city: "New York",  state: "NY", zipcode: "10022", cuisine: "Mexican", price: 2, rating: 3, latitude: 40.735148, longitude: -73.998075, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 7, tue_end_hr: 20, wed_start_hr: 7, wed_end_hr: 20, thur_start_hr: 7, thur_end_hr: 20, fri_start_hr: 7, fri_end_hr: 22, sat_start_hr: 7, sat_end_hr: 23, sun_start_hr: 10, sun_end_hr: 20, delivery: true)
file=File.open("./app/assets/images/oeste.jpg")
biz7.image = file
biz7.save!
biz8 = Business.create!(biz_name: "Thai Villa", phone_number: "(212) 645-2720", address: "5 E 19th St", city: "New York",  state: "NY", zipcode: "10042", cuisine: "Thai", price: 3, rating: 3, latitude: 40.739008, longitude: -73.990664, mon_start_hr: 11, mon_end_hr: 20,
tue_start_hr: 11, tue_end_hr: 20, wed_start_hr: 11, wed_end_hr: 20, thur_start_hr: 11, thur_end_hr: 20, fri_start_hr: 11, fri_end_hr: 22, sat_start_hr: 11, sat_end_hr: 23, sun_start_hr: 10, sun_end_hr: 18, delivery: true)
file=File.open("./app/assets/images/thai_villa.jpg")
biz8.image = file
biz8.save!
biz9 = Business.create!(biz_name: "Wafa's", phone_number: "(212) 644-2700", address: "812 Grand St", city: "Jersey City",  state: "NJ", zipcode: "11211", cuisine: "Vegetarian", price: 2, rating: 1, latitude: 40.714770, longitude: -74.072011, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 8, tue_end_hr: 20, wed_start_hr: 8, wed_end_hr: 20, thur_start_hr: 8, thur_end_hr: 20, fri_start_hr: 8, fri_end_hr: 22, sat_start_hr: 8, sat_end_hr: 23, sun_start_hr: 9, sun_end_hr: 22, delivery: true)
file=File.open("./app/assets/images/wafas.jpg")
biz9.image = file
biz9.save!
biz10 = Business.create!(biz_name: "Soco", phone_number: "(212) 634-2900", address: "509 Myrtle Ave", city: "Brooklyn",  state: "NY", zipcode: "10044", cuisine: "Cajun", price: 3, rating: 4, latitude: 40.693846, longitude: -73.964513, mon_start_hr: 9, mon_end_hr: 20,
tue_start_hr: 9, tue_end_hr: 22, wed_start_hr: 9, wed_end_hr: 22, thur_start_hr: 9, thur_end_hr: 22, fri_start_hr: 9, fri_end_hr: 22, sat_start_hr: 9, sat_end_hr: 23, sun_start_hr: 12, sun_end_hr: 20, delivery: true)
file=File.open("./app/assets/images/soco.jpg")
biz10.image = file
biz10.save!
biz11 = Business.create!(biz_name: "Peeled N' Pressed'", phone_number: "(929) 634-2900", address: "808B Union St", city: "Brooklyn",  state: "NY", zipcode: "11215", cuisine: "Juice Bar", price: 2, rating: 5, latitude: 40.704007, longitude: -73.986759, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 8, tue_end_hr: 20, wed_start_hr: 8, wed_end_hr: 20, thur_start_hr: 8, thur_end_hr: 20, fri_start_hr: 8, fri_end_hr: 22, sat_start_hr: 8, sat_end_hr: 23, sun_start_hr: 12, sun_end_hr: 20, delivery: false)
file=File.open("./app/assets/images/peeled1.jpg")
biz11.image = file
biz11.save!
biz12 = Business.create!(biz_name: "La Bella Vita", phone_number: "(718) 369-9318", address: "524 4th Ave", city: "Brooklyn",  state: "NY", zipcode: "11215", cuisine: "Pizza", price: 3, rating: 4, latitude: 40.667626, longitude: -73.991370, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 10, tue_end_hr: 23, wed_start_hr: 10, wed_end_hr: 23, thur_start_hr: 10, thur_end_hr: 23, fri_start_hr: 10, fri_end_hr: 24, sat_start_hr: 10, sat_end_hr: 24, sun_start_hr: 12, sun_end_hr: 23, delivery: true)
file=File.open("./app/assets/images/bella1.jpg")
biz12.image = file
biz12.save!
biz13 = Business.create!(biz_name: "Nyonya", phone_number: "(718) 369-9343", address: "199 Grand St", city: "New York",  state: "NY", zipcode: "10013", cuisine: "Asian", price: 1, rating: 3, latitude: 40.719002, longitude: -73.997027, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 10, tue_end_hr: 23, wed_start_hr: 10, wed_end_hr: 23, thur_start_hr: 10, thur_end_hr: 23, fri_start_hr: 10, fri_end_hr: 24, sat_start_hr: 10, sat_end_hr: 24, sun_start_hr: 12, sun_end_hr: 23, delivery: true)
file=File.open("./app/assets/images/nyonya1.jpg")
biz13.image = file
biz13.save!
biz14 = Business.create!(biz_name: "Poquito Picante", phone_number: "(718) 209-9343", address: "497 Atlantic Ave", city: "Brooklyn",  state: "NY", zipcode: "11217", cuisine: "Mexican", price: 2, rating: 4, latitude: 40.685766, longitude: -73.981269, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 10, tue_end_hr: 23, wed_start_hr: 10, wed_end_hr: 23, thur_start_hr: 10, thur_end_hr: 23, fri_start_hr: 10, fri_end_hr: 24, sat_start_hr: 10, sat_end_hr: 24, sun_start_hr: 12, sun_end_hr: 23, delivery: true)
file=File.open("./app/assets/images/pp1.jpg")
biz14.image = file
biz14.save!
biz15 = Business.create!(biz_name: "Julianne's Pizza", phone_number: "(718) 369-1325", address: "19 Old Fulton St", city: "Brooklyn",  state: "NY", zipcode: "11201", cuisine: "Pizza", price: 3, rating: 3, latitude: 40.702776, longitude: -73.993413, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 10, tue_end_hr: 23, wed_start_hr: 10, wed_end_hr: 23, thur_start_hr: 10, thur_end_hr: 23, fri_start_hr: 10, fri_end_hr: 24, sat_start_hr: 10, sat_end_hr: 24, sun_start_hr: 12, sun_end_hr: 23, delivery: true)
file=File.open("./app/assets/images/julianas1.jpg")
biz15.image = file
biz15.save!
biz16 = Business.create!(biz_name: "Sofia's Pizza Shoppe", phone_number: "(718) 269-3424", address: "989 1st Ave", city: "New York",  state: "NY", zipcode: "10022", cuisine: "Pizza", price: 1, rating: 4, latitude: 40.756676, longitude: -73.964351, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 10, tue_end_hr: 23, wed_start_hr: 10, wed_end_hr: 23, thur_start_hr: 10, thur_end_hr: 23, fri_start_hr: 10, fri_end_hr: 24, sat_start_hr: 10, sat_end_hr: 24, sun_start_hr: 12, sun_end_hr: 23, delivery: true)
file=File.open("./app/assets/images/sofias1.jpg")
biz16.image = file
biz16.save!
biz16 = Business.create!(biz_name: "Sofia's Pizza Shoppe", phone_number: "(718) 269-3424", address: "989 1st Ave", city: "New York",  state: "NY", zipcode: "10022", cuisine: "Pizza", price: 1, rating: 4, latitude: 40.756676, longitude: -73.964351, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 10, tue_end_hr: 23, wed_start_hr: 10, wed_end_hr: 23, thur_start_hr: 10, thur_end_hr: 23, fri_start_hr: 10, fri_end_hr: 24, sat_start_hr: 10, sat_end_hr: 24, sun_start_hr: 12, sun_end_hr: 23, delivery: true)
file=File.open("./app/assets/images/sofias1.jpg")
biz16.image = file
biz16.save!
biz16 = Business.create!(biz_name: "Sofia's Pizza Shoppe", phone_number: "(718) 269-3424", address: "989 1st Ave", city: "New York",  state: "NY", zipcode: "10022", cuisine: "Pizza", price: 1, rating: 4, latitude: 40.756676, longitude: -73.964351, mon_start_hr: 8, mon_end_hr: 20,
tue_start_hr: 10, tue_end_hr: 23, wed_start_hr: 10, wed_end_hr: 23, thur_start_hr: 10, thur_end_hr: 23, fri_start_hr: 10, fri_end_hr: 24, sat_start_hr: 10, sat_end_hr: 24, sun_start_hr: 12, sun_end_hr: 23, delivery: true)
file=File.open("./app/assets/images/sofias1.jpg")
biz16.image = file
biz16.save!




User.destroy_all

user1 = User.new(email: 'guest@hoot.com', password: "password", first_name: "guest", last_name: "guest", city: "New York", state: "NY", zipcode: "10023")
file=File.open("./app/assets/images/harry.jpg")
user1.user_img = file
user1.save!
user2 = User.create!(email: 'kati', password: "password", first_name: "Kati", last_name: "Townley", city: "New York", state: "NY", zipcode: "10023")
file=File.open("./app/assets/images/hermione.jpg")
user2.user_img = file
user2.save!
user3 = User.create!(email: 'bobby@yahoo.com', password: "123456", first_name: "Bobby", last_name: "O'Conner", city: "New York", state: "NY",  zipcode: "10023")
file=File.open("./app/assets/images/ron.jpg")
user3.user_img = file
user3.save!
user4 = User.create!(email: 'andrea.roselli@gmail.com', password: "hoothoot", first_name: "Andrea", last_name: "Townley", city: "Brooklyn", state: "NY", zipcode: "10023")
file=File.open("./app/assets/images/dumbledore.jpg")
user4.user_img = file
user4.save!
user5 = User.create!(email: 'gwen.corner@denveru.com', password: "belieber", first_name: "Gwen", last_name: "Corner", city: "Brooklyn", state: "NY", zipcode: "10027")
file=File.open("./app/assets/images/snape.jpg")
user5.user_img = file
user5.save!
user6 = User.create!(email: 'mgntown@yahoo.com', password: "Dumbledore", first_name: "Megan", last_name: "Townley", city: "New York", state: "NY", zipcode: "10044")
file=File.open("./app/assets/images/mcgon.jpg")
user6.user_img = file
user6.save!
user7 = User.create!(email: 'stevo@yahoo.com', password: "broncos", first_name: "Steve", last_name: "Cookie", city: "Indianapolis", state: "IN", zipcode: "10013")
file=File.open("./app/assets/images/steve.jpg")
user7.user_img = file
user7.save!

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
Review.create!(user_id: user1.id, business_id: biz7.id, user_rating: 4, body: "If you've been to Contenta in Lower East Side, you know what to expect in Contenta Oeste.  On the basis of two initial experiences (one dinner and one brunch) Contenta Oeste delivers and some more.  Everything that made Contenta great - great food using the freshest of ingredients and wonderful cocktails that you can't really get elsewhere coupled with excellent service - is here.  Additionally, the much larger space (and kitchen I assume) makes for comfortable dining, and gives us a menu that goes a bit deeper.  I was glad to see the old stand-bys (the chilaquiles, the fish tacos) together with the reappearance of dishes such as the crab tostada that at some point disappeared from the menu.   I am also excited to see new dishes (such as the breakfast item of eggs with nopal that will get me coming here at breakfast time!)")
Review.create!(user_id: user7.id, business_id: biz7.id, user_rating: 4, body: "I came here for brunch and got the Tequila Sunrise Mimosa and Poblano Benedict. Both absolutely delicious! Service was friendly and warm. There was a difficult customer at another table and I watched the staff working to make sure she was satisfied and taken care of. I can't wait to come back!")
Review.create!(user_id: user7.id, business_id: biz8.id, user_rating: 4, body: "Save you money and save your time. I was so disappointed with the overall experience and food. How is this place still open???")
Review.create!(user_id: user6.id, business_id: biz8.id, user_rating: 4, body: "Simply scrumptious. Can't say enough good things about Thai noodles. Their green curry is amazing as are their spring rolls. I will for sure be a regualar here.")
Review.create!(user_id: user6.id, business_id: biz9.id, user_rating: 4, body: "Wafa for life! As a vegetarian, I am always looking for new veggie-friendly restaurants. This one exceeded my expectations :). Try the tofu scramble!")
Review.create!(user_id: user5.id, business_id: biz10.id, user_rating: 4, body: "Soco is generally delicious but a tad overpriced for the versy small portion sizes. However, they make up for it with their incredible dessert options.")
Review.create!(user_id: user6.id, business_id: biz10.id, user_rating: 4, body: "Soco is so great! Highly recommend it!")
Review.create!(user_id: user3.id, business_id: biz9.id, user_rating: 3, body: "Wafa is decent! Though the service could be improved.")
Review.create!(user_id: user7.id, business_id: biz11.id, user_rating: 3, body: "3 stars for the poke bowl; 5 stars for the pitaya bowl and the lovely staff.Their acai and pitaya bowls are on point--great toppings, nicely balanced, usual (high) prices.  They didn't peel the kiwi, but the peel is edible I suppose. The poke bowls were a bit of a disappointment. The fish was fresh, and very generously scooped on--but that was it.  Fish mixed up in a heavy sauce, on a bed of rice/cauliflower rice. Cauliflower rice seems to just be food processed cauliflower--it's not steamed or cooked.   wheelhouse perhaps?  It's an easy fix--add sauce and toppings, and they might get the hang of it soon.  I think they've only been open a few weeks.  In the meantime, go for their pitaya bowls, and their smoothies are also probably yummy.")
Review.create!(user_id: user3.id, business_id: biz9.id, user_rating: 3, body: "Wafa is decent! Though the service could be improved.")
Review.create!(user_id: user7.id, business_id: biz13.id, user_rating: 3, body: "The food is really good. I came here last night with a party of 9. We ordered 7 dishes and 4 appetizers which we thought would be too much food. However to our surprise, the dishes are all quite small.
I think the food is excellent and the price per dish is reasonable. However when you look at the plates you get, its actually not a lot of food. So the price is very reasonable, but you don't get a lot of food in return. So I guess that means its overpriced for what you get in return. Get the house special squid and the half chicken.")
Review.create!(user_id: user5.id, business_id: biz16.id, user_rating: 4, body: "I am a huge fan of vodka pizza, and I was searching all over Manhattan to find more. I've had Rubirosa and Prince St Pizza (which are phenomenal) but so was Sofia's slice!! The sauce was flavorful and so creamy. The crust is a perfect crisp. I will definitely be returning soon; it was amazing. If you're a huge of vodka slices or want to try a new flavor - this place is a MUST. Ambiance:
This is a very small spot, so good if you want to come with 1-2 friends. There are a few chairs that look out onto the street. There's also a hip PIZZA sign inside - very photo worthy.")
Review.create!(user_id: user4.id, business_id: biz16.id, user_rating: 4, body: "Fulfilling and good! Thin NYC pizza. Can never go wrong with Pizza. I liked it. Very small shop, few sit down stools at the window for sit down, but better for a grab and go or carry out. Not sure if they have seating in non freezing temperatures days. Just checked it out during my visit to nyc this past long weekend after seeing pictures on instagram")
Review.create!(user_id: user3.id, business_id: biz16.id, user_rating: 4, body: "Great pizza. Oustanding balance of sauce to cheese. Top of line crunchy crust. Spinach dip was creamy spinach on a crisp crust. Margherita was also tasty. Special had a lot of sausage on it.They only have 5 seats but more of storefront takeout. I see why new yorkers dislike deep dish chicago pizza. Different species")
Review.create!(user_id: user2.id, business_id: biz16.id, user_rating: 3, body: "Pretty Good :)")
Review.create!(user_id: user4.id, business_id: biz15.id, user_rating: 2, body: "Nyonya is decent! Reasonably-priced Asian fusion food in Chinatown. Really good tea and yellow rice.")
Review.create!(user_id: user4.id, business_id: biz15.id, user_rating: 2, body: "Being in NY, my cousin & I knew we had to find an amazing NY style pizza place or else we wouldn't be doing our trip right. After spending some time in Brooklyn, we walked over here a few minutes after they reopened in the afternoon (4pm) and there was already a line waiting outside in freezing temps. There were about 7 or 8 parties ahead of us, so we figured we'd wait hoping it would die down quickly. Someone who got in line behind us actually went inside and asked how long the wait would be. They told him 20-30 minutes. Definitely wasn't even close. For us, it ended up being about an hour and we were wondering how much longer it would be for the people behind us because the line got much longer. ")
Review.create!(user_id: user2.id, business_id: biz15.id, user_rating: 2, body: "I've def had better.")
Review.create!(user_id: user1.id, business_id: biz15.id, user_rating: 2, body: "Could do with a but more cheese. I was not that impressed and would probably not visit this establishment again.")
Review.create!(user_id: user3.id, business_id: biz15.id, user_rating: 3, body: "Can't really say much. Forgettable. And my crust was a bit underdone which is like pizza cooking 101. I would avoid this place until they get their kitchen sorted out.")
Review.create!(user_id: user5.id, business_id: biz14.id, user_rating: 3, body: "Delicious. Me and the Beau went here for a light brunch. I got the pozole which was a perfect balance of hearty and spicy. Chunks of tender pork, spicy red broth, fresh lime & onion & oregano made the dish perfect for a cold December morning. The Beau got the elote which was delicious but a bit  over priced. The cocktails were spicy and tangy.Staff were friendly, food was fast, nice music and beautiful chill atmosphere. It was a tad pricey but all in all I would definitely recommend it for a relaxed afternoon brunch. I bet it has a nice evening vibe as well.")
Review.create!(user_id: user2.id, business_id: biz14.id, user_rating: 3, body: "This was SO good. Got the jalapeño infused gin cocktail w cucumber and cilantro- so well blended and good!!! The traditional guacamole is BOMB, impressed w the chorizo quesadilla, and the pastor tacos-
Amazing spot!!! And I'm from CA so I was very happy to find this spot!")
Review.create!(user_id: user1.id, business_id: biz14.id, user_rating: 3, body: "I love the atmosphere! It's small and quaint, service is prompt and the music is always great. The drinks are what you would expect from a small taco spot, usually strong and tasty. The food itself is, unfortunately, is pretty mediocre. The shrimp tacos are pretty terrible as are the steak tacos. The steak tacos always have an abundance of fat and the shrimp tacos are ill seasoned and rubbery. The chicken tacos are yummy with a kick of spice and the guac is really really good. The menu is a hit or miss, and the reason for the three stars. A huge plus and the main reason I continuously go back to this place are the hours. They are open super late which makes it nice late night taco spot around the way, there aren't many of those.")
Review.create!(user_id: user7.id, business_id: biz14.id, user_rating: 5, body: "When guacamole is served six inches atop the brim of your bowl, you know you've just landed at the $$$$$$ Mexican spot. I only got to try the enchilada and the guacamole with chips here and both were divine. The enchilada is full of flavor, is juicy, saucy and everything your palette could hope for all at once.

SO good - I highly recommend.")



Photo.destroy_all
Photo.create!(business_id: biz1.id, image: File.open('./app/assets/images/chip2.jpg'))
Photo.create!(business_id: biz1.id, image: File.open('./app/assets/images/chip3.jpg'))

Photo.create!(business_id: biz2.id, image: File.open('./app/assets/images/gandl2.jpg'))
Photo.create!(business_id: biz2.id, image: File.open('./app/assets/images/gandl3.jpg'))

Photo.create!(business_id: biz3.id, image: File.open('./app/assets/images/outro2.jpg'))
Photo.create!(business_id: biz3.id, image: File.open('./app/assets/images/outro3.jpg'))

Photo.create!(business_id: biz4.id, image: File.open('./app/assets/images/amelie2.jpg'))
Photo.create!(business_id: biz4.id, image: File.open('./app/assets/images/amelie3.jpg'))

Photo.create!(business_id: biz5.id, image: File.open('./app/assets/images/ton1.jpg'))
Photo.create!(business_id: biz5.id, image: File.open('./app/assets/images/ton2.jpg'))

Photo.create!(business_id: biz6.id, image: File.open('./app/assets/images/smith2.jpg'))
Photo.create!(business_id: biz6.id, image: File.open('./app/assets/images/smith3.jpg'))

Photo.create!(business_id: biz7.id, image: File.open('./app/assets/images/contenta2.jpg'))
Photo.create!(business_id: biz7.id, image: File.open('./app/assets/images/contenta3.jpg'))


Photo.create!(business_id: biz8.id, image: File.open('./app/assets/images/thai2.jpg'))
Photo.create!(business_id: biz8.id, image: File.open('./app/assets/images/thai3.jpeg'))

Photo.create!(business_id: biz9.id, image: File.open('./app/assets/images/wafas2.jpg'))
Photo.create!(business_id: biz9.id, image: File.open('./app/assets/images/wafas3.jpg'))

Photo.create!(business_id: biz10.id, image: File.open('./app/assets/images/socos2.jpg'))
Photo.create!(business_id: biz10.id, image: File.open('./app/assets/images/socos3.jpg'))

Photo.create!(business_id: biz11.id, image: File.open('./app/assets/images/peeled2.jpg'))
Photo.create!(business_id: biz11.id, image: File.open('./app/assets/images/peeled3.jpg'))

Photo.create!(business_id: biz12.id, image: File.open('./app/assets/images/bella2.jpg'))
Photo.create!(business_id: biz12.id, image: File.open('./app/assets/images/bella3.jpg'))

Photo.create!(business_id: biz13.id, image: File.open('./app/assets/images/nyonya2.jpg'))
Photo.create!(business_id: biz13.id, image: File.open('./app/assets/images/nyonya3.jpg'))

Photo.create!(business_id: biz14.id, image: File.open('./app/assets/images/pp2.jpg'))
Photo.create!(business_id: biz14.id, image: File.open('./app/assets/images/pp3.jpeg'))

Photo.create!(business_id: biz15.id, image: File.open('./app/assets/images/julianas2.jpg'))
Photo.create!(business_id: biz15.id, image: File.open('./app/assets/images/julianas3.jpg'))

Photo.create!(business_id: biz16.id, image: File.open('./app/assets/images/sofias2.jpg'))
Photo.create!(business_id: biz16.id, image: File.open('./app/assets/images/sofias3.jpeg'))
