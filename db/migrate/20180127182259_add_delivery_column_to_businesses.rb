class AddDeliveryColumnToBusinesses < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :delivery, :boolean
  end
end
