class CreateBusinesses < ActiveRecord::Migration[5.1]
  def change
    create_table :businesses do |t|
      t.string :biz_name, null: false
      t.string :description, null: false
      t.string :image_url
      t.string :owner_id
      t.string :cuisine
      t.integer :rating
      t.string :phone_number
      t.string :address, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.string :zipcode, null: false
      t.float :lat
      t.float :long

      t.timestamps
    end
    add_index :businesses, :cuisine
    add_index :businesses, :rating
    add_index :businesses, :city
    add_index :businesses, :state
    add_index :businesses, :zipcode
  end
end
