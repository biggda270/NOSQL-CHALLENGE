const { Schema, model } = require('mongoose');
const reactionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    thought: { type: Schema.Types.ObjectId, ref: 'Thought' },
    reaction: { type: String, enum: ['like', 'dislike', 'love', 'haha', 'wow', 'sad', 'angry'] }
});
