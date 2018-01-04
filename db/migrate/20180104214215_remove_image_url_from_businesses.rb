class RemoveImageUrlFromBusinesses < ActiveRecord::Migration[5.1]
  def change
    remove_column :businesses, :image_url 
  end
end
