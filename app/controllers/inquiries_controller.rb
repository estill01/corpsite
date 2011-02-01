class InquiriesController < ApplicationController

  def create
    @inquiry = Inquiry.new(params[:inquiry])
    if @inquiry.save
      redirect_to root_path
      flash[:success] = 
      "<p>Thanks for reaching out. We'll be in touch shortly.</p>
      <p>If this is a technomergency, please email ethan@protovore.com</p>"
    else
      flash[:error] = "Something went wrong. Oops. Sorry.  Email us instead."
      @inquiry[:params] = ""
      redirect_to root_path
    end
  end
  
      
  
end
