const { Schema, model, Types } = require('mongoose');
const reaction = require('./Reaction');

const thoughtSchema = new Schmea(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    creditAt: {
      type: Date,
      defualt: Date.now,
      get : (date) => {
        return new Date(date).toLocaleDateString();
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,

  }
);


thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
