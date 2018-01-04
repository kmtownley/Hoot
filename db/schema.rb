# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180104142532) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string "biz_name", null: false
    t.string "description", null: false
    t.string "image_url"
    t.string "owner_id"
    t.string "cuisine"
    t.integer "rating"
    t.string "phone_number"
    t.string "address", null: false
    t.string "state", null: false
    t.string "city", null: false
    t.string "zipcode", null: false
    t.float "lat"
    t.float "long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city"], name: "index_businesses_on_city"
    t.index ["cuisine"], name: "index_businesses_on_cuisine"
    t.index ["rating"], name: "index_businesses_on_rating"
    t.index ["state"], name: "index_businesses_on_state"
    t.index ["zipcode"], name: "index_businesses_on_zipcode"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.boolean "business_owner"
    t.string "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
