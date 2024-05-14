require 'rails_helper'

RSpec.describe PotentialUser, type: :model do
  let(:potential_user) { PotentialUser.create(name: "John",
                                              surname: "Doe",
                                              email: "johndoe@jd.com",
                                              job: "Farmer")}

  it 'has a name' do
    expect(potential_user.name).to eq("John")
  end

  it 'has a surname' do
    expect(potential_user.surname).to eq("Doe")
  end

  it 'has an email address' do
    expect(potential_user.email).to eq("johndoe@jd.com")
  end

  it 'has a job title' do
    expect(potential_user.job).to eq("Farmer")
  end

  describe 'validations' do

    it 'cannot be saved without a name' do
      potential_user.name = nil
      expect(potential_user).not_to be_valid
    end

    it 'cannot be saved without a surname' do
      potential_user.surname = ''
      expect(potential_user).not_to be_valid
    end

    it 'cannot be saved without an email address' do
      potential_user.email = nil
      expect(potential_user).not_to be_valid
    end

    it 'can only be saved with a valid email address' do
      potential_user.email = 'johndoe@gmail'
      expect(potential_user).not_to be_valid
    end

    # it 'can only be saved if the email address has not been taken' do
    #   new_potential_user = PotentialUser.new(name: "Jane",
    #                                          surname: "Doe",
    #                                          email: "johndoe@jd.com",
    #                                          job: "Farm Worker")
    #   expect(new_potential_user).not_to be_valid
    # end

    it 'cannot be saved without a job title' do
      potential_user.job = ''
      expect(potential_user).not_to be_valid
    end

  end


end
