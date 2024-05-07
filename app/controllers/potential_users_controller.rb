class PotentialUsersController < ApplicationController
  def new
    @potential_user = PotentialUser.new
  end
end
