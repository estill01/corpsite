class PagesController < ApplicationController
  
  def home
    @title = "home"
    @inquiry = Inquiry.new(params[:inquiry])
  end
  
  def contact
    @title = "contact"
    @inquiry = Inquiry.new(params[:inquiry])
  end
  
  def about
    @title = "about"
    @inquiry = Inquiry.new(params[:inquiry])
  end
  
  def services
    @title = "services"
    @inquiry = Inquiry.new(params[:inquiry])
  end
  
  def blog
    @title = "blog"
  end
  
  def thanks
    @title = "thanks"
    @inquiry = Inquiry.new(params[:inquiry])
  end
    
  
end
