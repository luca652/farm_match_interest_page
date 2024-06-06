class ChangeNameToFirstNameInPotentialUsers < ActiveRecord::Migration[7.0]
  def change
    rename_column :potential_users, :name, :first_name
  end
end
