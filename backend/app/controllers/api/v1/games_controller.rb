class Api::V1::GamesController < ApplicationController
  def index
    games = Game.all
    render json: games
  end

  def show
    game = Game.find(params[:id])
    render json: game
  end

  def new
    game = Game.new
  end

  def create
    game = Game.create(gameparams)
    # create tiles
    num_rows = gameparams["level"] + 1
    tiles = num_rows ^ 2
      # each with index for tile int
      # tiles times create new tile tile.game+_id = game id
    render json: game
  end

  def board
  # #of tiles  = (level + 1) ^2
  end

  # def complete_level
  #   # matrix = Matrix.build(2, 2) {|row, col| col - row }
  #   finished_level = Game.find_by(level_completed: true)
  #   if finished_level
  #     level += 1
  #     finished_level.level_completed = false
  #     matrix = Matrix.build(level+=1)
  #     # level.save
  #     # matrix.save
  #     # finished_level.save
  #   end
  #   user = User.find(:user_id)
  #   user.level_completed = !user.level_completed
  #   render json: user
  # end
  #
  # def update
  # end
  #
  # def edit
  # end
  #
  # def delete
  # end

  private

  def gameparams
    params.require(:game).permit(:level, :user_id, :score)
  end
end
