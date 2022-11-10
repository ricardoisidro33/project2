const { Schema, model } = require("mongoose");

const playerSchema = new Schema(
    {
        name: String,
        height: Number,
        weight: Number,
        number: Number,
        position: String,
        team: String,
        icon: String,
        playerVideo: String,
        reviews: [{
          type: Schema.Types.ObjectId,
          ref: "Review"
      }]
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
  );
  //Storing in Variable
const Player = model("Player", playerSchema)
//Export in variable
module.exports= Player;