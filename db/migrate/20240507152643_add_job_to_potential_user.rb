class AddJobToPotentialUser < ActiveRecord::Migration[7.0]
  def change
    add_column :potential_users, :job, :string
  end
end
