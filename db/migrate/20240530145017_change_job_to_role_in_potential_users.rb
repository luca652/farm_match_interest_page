class ChangeJobToRoleInPotentialUsers < ActiveRecord::Migration[7.0]
  def change
    rename_column :potential_users, :job, :role
  end
end
