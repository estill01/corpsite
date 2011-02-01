class PagesController < ApplicationController
  
  def home
    @title = "home"
    @inquiry = Inquiry.new(params[:inquiry])
  end
  
  def contact
    @title = "contact"
  end
  
  def about
    @title = "about"
  end
  
  def services
    @title = "services"
  end
  
  def blog
    @title = "blog"
  end
  
  def thanks
    @title = "thanks"
    @inquiry = Inquiry.new(params[:inquiry])
  end
    
  
end
