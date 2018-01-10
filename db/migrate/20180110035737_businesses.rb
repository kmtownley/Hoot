class Businesses < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :price, :integer 
  end
end
