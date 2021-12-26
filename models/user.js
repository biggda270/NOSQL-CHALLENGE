const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },

    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    ]

    userSchema.methods.getFriends = function() {
        return this.friends.map(friend => friend.username);
    }

    const User = model('User', userSchema);

    module.exports = User;

    
    