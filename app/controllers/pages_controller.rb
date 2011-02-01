class PagesController < ApplicationController
  
  def home
    @title = "home"
    @inquiry = Inquiry.new(params[:inquiry])
  end
  
  def contact
    @title = "Contact"
  end
  
  def about
    @title = "About"
  end
  
  def services
    @title = "Services"
  end
  
  def blog
    @title = "Blog"
  end
  
  def thanks
    @title = "Thanks"
    @inquiry = Inquiry.new(params[:inquiry])
  end
    
  
end
