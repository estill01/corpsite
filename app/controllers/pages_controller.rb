class PagesController < ApplicationController
  
  def home
    @title = "Home"
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
  
end
