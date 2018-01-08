@reviews.each do |review|
  json.set! review.id do
    json.partial! "review", review: review
    json.first_name review.user.first_name
    json.city review.user.city
    json.state review.user.state
  end
end
