const { Schema, model } = require("mongoose");

const teamSchema = new Schema(
    
        {
            name: String,
            conference: String,
            division: String,
            foundationyear: Number,
            titles: Number,
            arena: String,
            imgUrl: String
        },



    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
  );
  //Storing in Variable
const Team= model("Team", teamSchema)
//Export in variable
module.exports= Team;