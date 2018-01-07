class AddLatitudeAndLongitudeToModel < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :latitude, :float
    add_column :businesses, :longitude, :float
    remove_column :businesses, :lat
    remove_column :businesses, :long
  end
end
