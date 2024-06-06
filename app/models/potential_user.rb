class PotentialUser < ApplicationRecord

  validates :name, presence: true
  validates :surname, presence: true
  validates :email, presence: true
  validates :email, uniqueness: true
  validate :valid_email
  validates :role, presence: true
  validates :county, presence: true
  validates :terms_of_service, acceptance: true

  def valid_email
    unless EmailAddress.valid? email
      errors.add(:email, "The email address provided is not valid")
    end
  end

  ROLES = ["Farmer", "Agri Contractor", "Farm Worker"]
  COUNTIES = ["Antrim", "Armagh", "Carlow", "Cavan", "Clare", "Cork", "Derry", "Donegal", "Down",
              "Dublin", "Fermanagh", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim",
              "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon",
              "Sligo", "Tipperary", "Tyrone", "Waterford", "Westmeath", "Wexford","Wicklow"]
  TASKS = {
    'Agri Contracting' => ['Application (Spraying and Spreading)',
                           'Drilling & Sowing',
                           'Fencing & Hedging',
                           'Grassland Harvesting',
                           'Crop Harvesting',
                           'Hedge Cutting',
                           'Machine & Tractor Hire',
                           'Maize Harvesting',
                           'Mobile feeding',
                           'Muck & Slurry',
                           'Painting & Powerwashing',
                           'Soil Preparation'],
    'Forestry' => ['Tree Cutting & Forestry'],
    'Plant Hire & Earthworks' => ['Plant Hire & Earthworks'],
    'Farm Labour'=> ['Animal Care',
                     'Milking',
                     'General Yard Duties',
                     'Picking',
                     'Machinery Driving & Operation']
  }.freeze
  TASKS.each(&:freeze)
end
