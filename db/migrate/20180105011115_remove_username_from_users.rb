class RemoveUsernameFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :username
    add_column :users, :email, :string
    add_index :users, :email
  end
end
