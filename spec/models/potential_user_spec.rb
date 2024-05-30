require 'rails_helper'

RSpec.describe PotentialUser, type: :model do
  let(:potential_user) { PotentialUser.create(name: "John",
                                              surname: "Doe",
                                              email: "johndoe@jd.com",
                                              role: "Farmer",
                                              county: "Antrim")}

  it 'has a name' do
    expect(potential_user.name).to eq("John")
  end

  it 'has a surname' do
    expect(potential_user.surname).to eq("Doe")
  end

  it 'has an email address' do
    expect(potential_user.email).to eq("johndoe@jd.com")
  end

  it 'has a role title' do
    expect(potential_user.role).to eq("Farmer")
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

    it 'cannot be saved without a role title' do
      potential_user.role = ''
      expect(potential_user).not_to be_valid
    end

    it 'cannot be saved without selecting a county' do
      potential_user.county = ''
      expect(potential_user).not_to be_valid
      p potential_user.errors.full_messages
      expect(potential_user.errors[:county]).to include("can't be blank")
    end

    it 'cannot be saved without agreeing to GDPR' do
      potential_user.terms_of_service = false
      expect(potential_user).not_to be_valid
      expect(potential_user.errors[:terms_of_service]).to include("must be accepted")
    end

  end


end
