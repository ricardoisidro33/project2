const mongoose = require("mongoose");
const Team = require("../models/Team.model");
const Player = require("../models/Player.model");



const teams = [
    {
      name: "Houston Rockets",
      conference: "Western Conference",
      division: "Southwest Division",
      foundationyear: 1967,
      titles: 2,
      arena: "Toyota Center",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/800px-Houston_Rockets.svg.png"
    },

    {
        name: "Boston Celtics",
        conference: "Eastern Conference",
        division: "Atlantic Division",
        foundationyear: 1946,
        titles: 17,
        arena: "TD Garden",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/800px-Boston_Celtics.svg.png"
      },
    
      {
        name: "Philadelphia 76ers",
        conference: "Eastern Conference",
        division: "Atlantic Division",
        foundationyear: 1946,
        titles: 3,
        arena: "Wells Fargo Center",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Philadelphia-76ers-Logo-1977-1996.png"
      },

      {
        name: "Los Angeles Lakers",
        conference: "Western Conference",
        division: "Pacific Division",
        foundationyear: 1947,
        titles: 17,
        arena: "Staples Center / Crypto.com Arena",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg"
      },

      {
        name: "Golden State Warriors",
        conference: "Western Conference",
        division: "Pacific Division",
        foundationyear: 1946,
        titles: 7,
        arena: "Chase Center",
        imgUrl: "https://upload.wikimedia.org/wikipedia/pt/d/da/Golden_State_Warriors.png"
      },

      {
        name: "Miami Heat",
        conference: "Eastern Conference",
        division: "Southeast Division",
        foundationyear: 1988,
        titles: 3,
        arena: "AmericanAirlines Arena",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/800px-Miami_Heat_logo.svg.png"
      },
      
      {
        name: "Chicago Bulls",
        conference: "Eastern Conference",
        division: "Central Division",
        foundationyear: 1966,
        titles: 6,
        arena: "United Center",
        imgUrl: "https://seeklogo.com/images/C/chicago-bulls-logo-8530A1093D-seeklogo.com.png"
      },
      {
        name: "Memphis Grizzlies",
        conference: "Western Conference",
        division: "Southwest Division",
        foundationyear: 1995,
        titles: 0,
        arena: "FedEx Forum",
        imgUrl: "https://s.yimg.com/it/api/res/1.2/Mt3Hyyb_5Sy1S5OVcmNS0w--~A/YXBwaWQ9eW5ld3M7dz0xMjAwO2g9NjMwO3E9MTAw/https://s.yimg.com/cv/apiv2/default/nba/20181218/500x500/grizzlies_wbg.png"
      },
      {
        name: "Dallas Mavericks",
        conference: "Western Conference",
        division: "Southwest Division",
        foundationyear: 1980,
        titles: 1,
        arena: "American Airlines Center",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/800px-Dallas_Mavericks_logo.svg.png"
      },
      {
        name: "Toronto Raptors",
        conference: "Eastern Conference",
        division: "Atlantic Division",
        foundationyear: 1995,
        titles: 1,
        arena: "Air Canada Center",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Toronto_Raptors_logo.svg/800px-Toronto_Raptors_logo.svg.png"
      },
      {
        name: "Detroit Pistons",
        conference: "Eastern Conference",
        division: "Central Division",
        foundationyear: 1941,
        titles: 3,
        arena: "Little Caesars Arena",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pistons_logo17.svg/1200px-Pistons_logo17.svg.png"
      },
]




const players = [
    {
        name: "James Harden",
        height: 1.96,
        weight: 100,
        number: 13,
        position: "Point Guard / Shooting Guard",
        team: "Houston Rockets",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png",
        playerimg: "https://thespun.com/.image/t_share/MTgzMTI4NTIwODI1Nzc1NDU2/brooklyn-nets-v-houston-rockets.jpg",
        playerVideo: "https://www.youtube.com/embed/X9GddRiKdXg"
    },
    {
        name: "Hakeem Olajuwon",
        height: 2.13,
        weight: 116,
        number: 34,
        position: "Center",
        team: "Houston Rockets",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/165.png",
        playerimg: "https://i.pinimg.com/736x/b7/54/fd/b754fd9f4769089fae5c393d27cb9082.jpg",
        playerVideo: "https://www.youtube.com/embed/_m8OeZWbcOE"
        
    },
    {
        name: "Tracy McGrady",
        height: 2.03,
        weight: 102,
        number: 1,
        position: "Small Forward",
        team: "Houston Rockets",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1503.png",
        playerimg: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg5ODA2MDc2OTM2MzMyOTg4/gettyimages-51947720-1-e1587784829131.jpg",
        playerVideo: "https://www.youtube.com/embed/NollBuDyU6Q"
    },
    {
        name: "Kobe Bryant",
        height: 1.98,
        weight: 96,
        number: 24,
        position: "Shooting Guard",
        team: "Los Angeles Lakers",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/977.png",
        playerimg: "https://i.pinimg.com/736x/5f/2c/62/5f2c6230d938b73b840a5c7cc4e5d807--custom-basketball-nike-basketball.jpg",
        playerVideo: "https://www.youtube.com/embed/jhyANGHDDH8"
    },
    {
        name: "Shaquille O'Neal",
        height: 2.16,
        weight: 147,
        number: 34,
        position: "Center",
        team: "Los Angeles Lakers",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/406.png",
        playerimg: "http://cdn.shopify.com/s/files/1/0589/1069/products/LakersShaquilleO_Neal-3974892.jpg?v=1597522784",
        playerVideo: "https://www.youtube.com/embed/oXOZMg6VWMA"
    },
    {
        name: "Magic Johnson",
        height: 2.06,
        weight: 100,
        number: 32,
        position: "Point Guard",
        team: "Los Angeles Lakers",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/77142.png",
        playerimg: "https://cdn.britannica.com/27/189527-050-5BAD12C2/Magic-Johnson.jpg",
        playerVideo: "https://www.youtube.com/embed/1rHsp8ftQbI"
    },
    {
        name: "Jayson Tatum",
        height: 2.03,
        weight: 95,
        number: 0,
        position: "Power Forward",
        team: "Boston Celtics",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png&w=350&h=254",
        playerimg: "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/zM-UIuIgibxZwV7BsSLOvKjJInc=/960x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/KLS5NKDF56RGFF3CY7BLRLGYEE.jpg",
        playerVideo: "https://www.youtube.com/embed/vF-Q85EuAtI"
    },
    {
        name: "Larry Bird",
        height: 2.06,
        weight: 100,
        number: 33,
        position: "Shooting Guard",
        team: "Boston Celtics",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1449.png",
        playerimg: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Larry_Bird_layup.jpg",
        playerVideo: "https://www.youtube.com/embed/mLVj4uzrSDY"
    },
    {
        name: "Bill Russell",
        height: 2.08,
        weight: 100,
        number: 6,
        position: "Center",
        team: "Boston Celtics",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/78049.png",
        playerimg: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxMjkwOTc1NzExMTQzNTIy/bill-russell-celtics-vault.jpg",
        playerVideo: "https://www.youtube.com/embed/asJt-3dpd90"
    },
    {
        name: "Lebron James",
        height: 2.06,
        weight: 113,
        number: 6,
        position: "Power Forward / Small Forward",
        team: "Miami Heat",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
        playerimg: "https://image-cdn.essentiallysports.com/wp-content/uploads/20201015004631/164213930.jpeg?width=900",
        playerVideo: "https://www.youtube.com/embed/mE295ggKbHU"
    },
    {
        name: "Dwayne Wade",
        height: 1.93,
        weight: 100,
        number: 3,
        position: "Shooting Guard",
        team: "Miami Heat",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1987.png",
        playerimg: "https://assets-cms.thescore.com/uploads/image/file/211482/cropped_GettyImages-618675380.jpg?ts=1477634010",
        playerVideo: "https://www.youtube.com/embed/pjkRwRmWpH8"
    },
    {
        name: "Chris Bosh",
        height: 2.11,
        weight: 106,
        number: 1,
        position: "Center",
        team: "Miami Heat",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/2547.png",
        playerimg: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fhoopshabit.com%2Ffiles%2F2016%2F07%2Fchris-bosh-nba-miami-heat-houston-rockets.jpg",
        playerVideo: "https://www.youtube.com/embed/mYanfTLamNs"
    },

    {
        name: "Allen Iverson",
        height: 1.83,
        weight: 75,
        number: 3,
        position: "Point Guard / Shooting Guard",
        team: "Philadelphia 76ers",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/947.png",
        playerimg: "https://conteudo.imguol.com.br/c/esporte/84/2021/04/26/allen-iverson-em-acao-pelo-philadelphia-76ers-contra-o-dallas-mavericks-em-2001-1619445402369_v2_1x1.jpg",
        playerVideo: "https://www.youtube.com/embed/2REkZG-dhHc"
    },
    {
        name: "Joel Embiid",
        height: 2.13,
        weight: 127,
        number: 21,
        position: "Center",
        team: "Philadelphia 76ers",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&w=350&h=254",
        playerVideo: "https://www.youtube.com/embed/3hvEYmT4pS4"
    },
    {
        name: "Moses Malone",
        height: 2.08,
        weight: 120,
        number: 2,
        position: "Center",
        team: "Philadelphia 76ers",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/77449.png",
        playerimg: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MTg1NTQ1Nzk0NTk0MTc2/moses-malone-dies-age-60jpg.jpg",
        playerVideo: "https://www.youtube.com/embed/D4_JwbH800U"
    },
    {
        name: "Steph Curry",
        height: 1.88,
        weight: 84,
        number: 30,
        position: "Point Guard",
        team: "Golden State Warriors",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254",
        playerVideo: "https://www.youtube.com/embed/2CHT0q8QBy4"
    },
    {
        name: "Klay Thompson",
        height: 1.98,
        weight: 100,
        number: 11,
        position: "Shooting Guard",
        team: "Golden State Warriors",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png&w=350&h=254",
        playerVideo: "https://www.youtube.com/embed/kClWLPXGRZ8"
    },
    {
        name: "Kevin Durant",
        height: 2.08,
        weight: 109,
        number: 35,
        position: "Power Forward",
        team: "Golden State Warriors",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png&w=350&h=254",
        playerVideo: "https://www.youtube.com/embed/kxo4vusn8fk"
    },
    {
        name: "Michael Jordan",
        height: 1.98,
        weight: 98,
        number: 23,
        position: "Shooting Guard",
        team: "Chicago Bulls",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/893.png",
        playerVideo: "https://www.youtube.com/embed/XDSCLo4FBUE"
    },
    {
        name: "Scottie Pippen",
        height: 2.03,
        weight: 103,
        number: 33,
        position: "Small Forward",
        team: "Chicago Bulls",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/663.png",
        playerVideo: "https://www.youtube.com/embed/HTN7JZrBgbQ"
    },
    {
        name: "Derrick Rose",
        height: 1.91,
        weight: 91,
        number: 1,
        position: "Point Guard",
        team: "Chicago Bulls",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/201565.png",
        playerVideo: "https://www.youtube.com/embed/DQ9y-Brgy_U"
    },
    {
        name: "Ja Morant",
        height: 1.91,
        weight: 91,
        number: 1,
        position: "Point Guard",
        team: "Memphis Grizzlies",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629630.png",
        playerVideo: "https://www.youtube.com/embed/YXNjaccDiR8"
    },
    {
        name: "Marc Gasol",
        height: 2.11,
        weight: 115,
        number: 33,
        position: "Center",
        team: "Memphis Grizzlies",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3206.png&w=350&h=254",
        playerVideo: "https://www.youtube.com/embed/qZg19q7aJjw"
    },
    {
        name: "Pau Gasol",
        height: 2.13,
        weight: 113,
        number: 16,
        position: "Center",
        team: "Memphis Grizzlies",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/996.png",
        playerVideo: "https://www.youtube.com/embed/vaBcef35mww"
    },
    {
        name: "Luka Doncic",
        height: 2.01,
        weight: 104,
        number: 77,
        position: "Point Guard",
        team: "Dallas Mavericks",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&w=350&h=254",
        playerVideo: "https://www.youtube.com/embed/Igbm8owLhyg"
    },
    {
        name: "Dirk Nowitzki",
        height: 2.13,
        weight: 111,
        number: 41,
        position: "Power Forward",
        team: "Dallas Mavericks",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1717.png",
        playerVideo: "https://www.youtube.com/embed/z9ZHcSX3TWY"
    },
    {
        name: "Jason Kidd",
        height: 1.93,
        weight: 95,
        number: 2,
        position: "Point Guard",
        team: "Dallas Mavericks",
        icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/429.png",
        playerVideo: "https://www.youtube.com/embed/iqflzZbTpDw"
    },
    {
        name: "Kawhi Leonard",
        height: 2.01,
        weight: 104,
        number: 2,
        position: "Small Forward",
        team: "Toronto Raptors",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png",
        playerVideo: "https://www.youtube.com/embed/5JWAx19dmbk"
    },
    {
        name: "Vince Carter",
        height: 1.98,
        weight: 100,
        number: 15,
        position: "Shooting Guard",
        team: "Toronto Raptors",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1713.png",
        playerVideo: "https://www.youtube.com/embed/ig5fN6XVq-4"
    },
    {
        name: "Kyle Lowry",
        height: 1.83,
        weight: 89,
        number: 7,
        position: "Point Guard",
        team: "Toronto Raptors",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/200768.png",
        playerVideo: "https://www.youtube.com/embed/y1_ikd7XiSM"
    },
    {
        name: "Ben Wallace",
        height: 2.06,
        weight: 109,
        number: 3,
        position: "Small Forward",
        team: "Detroit Pistons",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1112.png",
        playerVideo: "https://www.youtube.com/embed/wPRLMb-AET4"
    },
    {
        name: "Isiah Thomas",
        height: 1.85,
        weight: 82,
        number: 11,
        position: "Point Guard",
        team: "Detroit Pistons",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/78318.png",
        playerVideo: "https://www.youtube.com/embed/PVTIB_j8EU8"
    },
    {
        name: "Dennis Rodman",
        height: 2.01,
        weight: 100,
        number: 10,
        position: "Power Forward",
        team: "Detroit Pistons",
        icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/23.png",
        playerVideo: "https://www.youtube.com/embed/XBoVDIvOrfI"
    },
]



async function seeds(){
    try{

    
    const x = await mongoose.connect("mongodb+srv://Ricardo:12345@project.nlqoh6b.mongodb.net/?retryWrites=true&w=majority")
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