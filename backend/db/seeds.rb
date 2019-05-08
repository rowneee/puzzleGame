# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "Roni", score: 0)
user2 = User.create(name: "Elizabeth", score: 0)
user3 = User.create(name: "Elaina", score: 0)

game1 = Game.create(score: 1, user_id: user1.id, level: 1)
game1 = Game.create(score: 1, user_id: user2.id, level: 1)
game1 = Game.create(score: 1, user_id: user3.id, level: 1)
