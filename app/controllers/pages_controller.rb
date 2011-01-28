class PagesController < ApplicationController
  
  def home
    @title = "Home"
    @inquiry = Inquiry.new(params[:inquiry])
  end
  
  def contact
  end
  
  def about
  end
    
end
