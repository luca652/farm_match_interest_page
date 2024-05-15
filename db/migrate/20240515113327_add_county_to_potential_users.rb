class AddCountyToPotentialUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :potential_users, :county, :string
  end
end
