class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :user_rating, null: false
      t.integer :business_id, null: false
      t.integer :user_id, null: false
      t.string :body, null: false 

      t.timestamps
    end
  end
end
