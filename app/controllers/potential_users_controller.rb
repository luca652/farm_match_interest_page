class PotentialUsersController < ApplicationController
  def new
    @potential_user = PotentialUser.new
  end

  def create

    @potential_user = PotentialUser.new(potential_user_params)

    if @potential_user.save
      redirect_to root_path, notice: { title: "Thank you for your interest in Farm Match!",
                                       message: "We will keep you updated on our progress." }

    else
      render 'register', status: :unprocessable_entity
      # add errors
    end
  end

  def register
    @potential_user = PotentialUser.new
  end

  private

  def potential_user_params
    params.require(:potential_user).permit(:name, :surname, :email, :job)
  end
end
