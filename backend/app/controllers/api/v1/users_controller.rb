class Api::V1::UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def new
    user = User.new
  end

  def create
    user = User.create(userparams)
    render json: user
  end

  # def update
  # end
  #
  # def edit
  # end

  # def delete
  # end

  private

  def userparams
    params.require(:user).permit(:name, :score)
  end


end
