class AddTasksToPotentialUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :potential_users, :tasks, :string, array: true, default: []
  end
end
