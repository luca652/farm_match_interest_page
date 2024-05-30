class AddTermsOfServiceToPotentialUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :potential_users, :terms_of_service, :boolean
  end
end
