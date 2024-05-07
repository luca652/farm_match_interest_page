class PotentialUser < ApplicationRecord

  validates :name, presence: true
  validates :surname, presence: true
  validates :email, presence: true
  validates :email, uniqueness: true
  validate :valid_email
  validates :job, presence: true

  def valid_email
    unless EmailAddress.valid? email
      errors.add(:email, "The email address provided is not valid")
    end
  end

  JOBS = ["Farmer", "Agri Contractor", "Farm Worker"]
end
