class AddBizTimesColumnsToBusinesses < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :mon_start_hr, :integer
    add_column :businesses, :mon_end_hr, :integer
    add_column :businesses, :tue_start_hr, :integer
    add_column :businesses, :tue_end_hr, :integer
    add_column :businesses, :wed_start_hr, :integer
    add_column :businesses, :wed_end_hr, :integer
    add_column :businesses, :thur_start_hr, :integer
    add_column :businesses, :thur_end_hr, :integer
    add_column :businesses, :fri_start_hr, :integer
    add_column :businesses, :fri_end_hr, :integer
    add_column :businesses, :sat_start_hr, :integer
    add_column :businesses, :sat_end_hr, :integer
    add_column :businesses, :sun_start_hr, :integer
    add_column :businesses, :sun_end_hr, :integer
  end
end
