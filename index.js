const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here
Post.hasMany(Comment)
Comment.belongsTo(Post)

Post.hasMany(Like)
Like.belongsTo(Post)

Profile.hasMany(Post)
Post.belongsTo(Profile)

User.hasOne(Profile)
Profile.belongsTo(User)




module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}