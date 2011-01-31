class InquiriesController < ApplicationController

  def create
    @inquiry = Inquiry.new(params[:inquiry])
    if @inquiry.save
      flash[:success] = "sent"
      redirect_to root_path
    else
      flash[:error] = "didn't work"
      @inquiry[:params] = ""
      redirect_to root_path
    end
  end
  
end
