const mongoose = require("mongoose");
const Team = require("../models/Team.model");
const Player = require("../models/Player.model");



const teams = [
    {
      name: "Houston Rockets",
      conference: "Western Conference",
      divison: "Southwest Division",
      foundationyear: 1967,
      titles: 2,
      arena: "Toyota Center"
    },

    {
        name: "Boston Celtics",
        conference: "Eastern Conference",
        divison: "Atlantic Division",
        foundationyear: 1946,
        titles: 17,
        arena: "TD Garden"
      },
    
      {
        name: "Philadelphia 76ers",
        conference: "Eastern Conference",
        divison: "Atlantic Division",
        foundationyear: 1946,
        titles: 3,
        arena: "Wells Fargo Center"
      },

      {
        name: "Los Angeles Lakers",
        conference: "Western Conference",
        divison: "Pacific Division",
        foundationyear: 1947,
        titles: 17,
        arena: "Staples Center / Crypto.com Arena"
      },

      {
        name: "Golden State Warriors",
        conference: "Western Conference",
        divison: "Pacific Division",
        foundationyear: 1946,
        titles: 7,
        arena: "Chase Center"
      },

      {
        name: "Miami Heat",
        conference: "Eastern Conference",
        divison: "Southeast Division",
        foundationyear: 1988,
        titles: 3,
        arena: "AmericanAirlines Arena"
      },
      
      {
        name: "Chicago Bulls",
        conference: "Eastern Conference",
        divison: "Central Division",
        foundationyear: 1966,
        titles: 6,
        arena: "United Center"
      },
]




const players = [
    {
        name: "James Harden",
        height: 1.96,
        weight: 100,
        number: 13,
        position: "Point Guard / Shooting Guard",
        team: "Houston Rockets"
    },
    {
        name: "Hakeem Olajuwon",
        height: 2.13,
        weight: 116,
        number: 34,
        position: "Center",
        team: "Houston Rockets"
        
    },
    {
        name: "Tracy McGrady",
        height: 2.03,
        weight: 102,
        number: 1,
        position: "Small Forward",
        team: "Houston Rockets"
    },
    {
        name: "Kobe Bryant",
        height: 1.98,
        weight: 96,
        number: 24,
        position: "Shooting Guard",
        team: "Los Angeles Lakers"
    },
    {
        name: "Shaquille O'Neal",
        height: 2.16,
        weight: 147,
        number: 34,
        position: "Center",
        team: "Los Angeles Lakers"
    },
    {
        name: "Magic Johnson",
        height: 2.06,
        weight: 100,
        number: 32,
        position: "Point Guard",
        team: "Los Angeles Lakers"
    },
    {
        name: "Jayson Tatum",
        height: 2.03,
        weight: 95,
        number: 0,
        position: "Power Forward",
        team: "Boston Celtics"
    },
    {
        name: "Larry Bird",
        height: 2.06,
        weight: 100,
        number: 33,
        position: "Shooting Guard",
        team: "Boston Celtics"
    },
    {
        name: "Bill Russell",
        height: 2.08,
        weight: 100,
        number: 6,
        position: "Center",
        team: "Boston Celtics"
    },
    {
        name: "Lebron James",
        height: 2.06,
        weight: 113,
        number: 6,
        position: "Power Forward / Small Forward",
        team: "Miami Heat"
    },
    {
        name: "Dwayne Wade",
        height: 1.93,
        weight: 100,
        number: 3,
        position: "Shooting Guard",
        team: "Miami Heat"
    },
    {
        name: "Chris Bosh",
        height: 2.11,
        weight: 106,
        number: 1,
        position: "Center",
        team: "Miami Heat"
    },

    {
        name: "Allen Iverson",
        height: 1.83,
        weight: 75,
        number: 3,
        position: "Point Guard / Shooting Guard",
        team: "Philadelphia 76ers"
    },
    {
        name: "Joel Embiid",
        height: 2.13,
        weight: 127,
        number: 21,
        position: "Center",
        team: "Philadelphia 76ers"
    },
    {
        name: "Moses Malone",
        height: 2.08,
        weight: 120,
        number: 2,
        position: "Center",
        team: "Philadelphia 76ers"
    },
    {
        name: "Steph Curry",
        height: 1.88,
        weight: 84,
        number: 30,
        position: "Point Guard",
        team: "Golden State Warriors"
    },
    {
        name: "Klay Thompson",
        height: 1.98,
        weight: 100,
        number: 11,
        position: "Shooting Guard",
        team: "Golden State Warriors"
    },
    {
        name: "Kevin Durant",
        height: 2.08,
        weight: 109,
        number: 35,
        position: "Power Forward",
        team: "Golden State Warriors"
    },
    {
        name: "Michael Jordan",
        height: 1.98,
        weight: 98,
        number: 23,
        position: "Shooting Guard",
        team: "Chicago Bulls"
    },
    {
        name: "Scottie Pippen",
        height: 2.03,
        weight: 103,
        number: 33,
        position: "Small Forward",
        team: "Chicago Bulls"
    },
    {
        name: "Derrick Rose",
        height: 1.91,
        weight: 91,
        number: 1,
        position: "Point Guard",
        team: "Chicago Bulls"
    },
]



async function seeds(){
    try{

    
    const x = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connected to: ${x.connections[0].name}`);

        //Adding books to DB
   let createdTeams = await Team.create(teams);
   const createdPlayers= await Player.create(players);
console.log(`Successfuly created ${createdTeams.length}`);
console.log(`Successfuly created ${createdPlayers.length}`);

    x.disconnect()
}
catch(error){
    console.log(error)
}
  }

  seeds(); 