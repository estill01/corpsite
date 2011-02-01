class Inquiry < ActiveRecord::Base
  attr_accessible :content, :name, :email
  
  validate :name, :presence => true
  validate :email, :presence => true
  validate :content, :presence => true
    
  # before_save :followup
  
  
  private
  
    def followup
      UserMailer.welcome(user).deliver
    end
  
end
