class InquiryMailer < ActionMailer::Base
  default :from => "from@example.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.inquiry_mailer.welcome.subject
  #
  def welcome(user)
    
    user = @inquiry
    
    @greeting = "Hi #{user.name}"

    mail(:from => "admin@testapp.com",
         :to => user.email,
         :subject => "Thanks for reaching out")
  end
end
