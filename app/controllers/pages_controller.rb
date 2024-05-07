class PagesController < ApplicationController
  def welcome
  end

  def register
    @potential_user = PotentialUser.new
  end
end
