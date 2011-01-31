class PagesController < ApplicationController
  
  def home
    @title = "Home"
    @inquiry = Inquiry.new(params[:inquiry])
    # @inquiry = Inquiry.new
  end
  
  def contact
  end
  
  def about
  end
    
end
