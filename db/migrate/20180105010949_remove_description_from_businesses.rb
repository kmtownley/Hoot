class RemoveDescriptionFromBusinesses < ActiveRecord::Migration[5.1]
  def change
    remove_column :businesses, :description, :string
  end
end
