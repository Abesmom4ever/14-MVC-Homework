(Comment = require("./Comment")), (User = require("./User"));

User.hasMany(Blogpost, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

module.exports = { User };
