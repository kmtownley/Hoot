class AddZipcodeToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :zipcode, :string, null: false
  end
end
