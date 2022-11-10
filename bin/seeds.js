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
      {
        name: "Atlanta Hawks",
        conference: "Eastern Conference",
        division: "Southeast Division",
        foundationyear: 1946,
        titles: 1,
        arena: "State Farm Arena",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/1200px-Atlanta_Hawks_logo.svg.png"
      },

{
        name: "Brooklyn Nets",
        conference: "Eastern Conference",
        division: "Atlantic Division",
        foundationyear: 1967,
        titles: 0,
        arena: "Barclays Center",
        imgUrl: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bkn.png"
      },

{
        name: "Charlotte Hornets",
        conference: "Eastern Conference",
        division: "Southeast Division",
        foundationyear: 1988,
        titles: 0,
        arena: "Spectrum Center",
        imgUrl: "https://upload.wikimedia.org/wikipedia/pt/f/f6/Charlotte_Hornets.png"
      },

{
        name: "Cleveland Cavaliers",
        conference: "Eastern Conference",
        division: "Central Division",
        foundationyear: 1970,
        titles: 1,
        arena: "Rocket Mortgage Fieldhouse",
        imgUrl: "https://b.fssta.com/uploads/application/nba/team-logos/Cavaliers.png"
      },

{
        name: "Indiana Pacers",
        conference: "Eastern Conference",
        division: "Central Division",
        foundationyear: 1967,
        titles: 0,
        arena: "Bankers Life Fieldhouse",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png"
      },

{
        name: "Milwaukee Bucks",
        conference: "Eastern Conference",
        division: "Central Division",
        foundationyear: 1968,
        titles: 2,
        arena: "Fiserv Forum",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1200px-Milwaukee_Bucks_logo.svg.png"
      },

{
        name: "New York Knicks",
        conference: "Eastern Conference",
        division: "Atlantic Division",
        foundationyear: 1946,
        titles: 2,
        arena: "Madison Square Garden",
        imgUrl: "https://upload.wikimedia.org/wikipedia/pt/d/d8/NewYorkKnicks.PNG"
      },

{
        name: "Orlando Magic",
        conference: "Eastern Conference",
        division: "Southeast Division",
        foundationyear: 1989,
        titles: 0,
        arena: "Amway Center",
        imgUrl: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/orl.png"
      },

{
        name: "Washington Wizards",
        conference: "Eastern Conference",
        division: "Southeast Division",
        foundationyear: 1961,
        titles: 1,
        arena: "Capital One Arena",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg"
      },

{
        name: "Denver Nuggets",
        conference: "Western Conference",
        division: "Northwest Division",
        foundationyear: 1967,
        titles: 0,
        arena: "Pepsi Center",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/1200px-Denver_Nuggets.svg.png"
      },
{
        name: "Los Angeles Clippers",
        conference: "Western Conference",
        division: "Pacific Division",
        foundationyear: 1970,
        titles: 0,
        arena: "Staples Center / Crypto.com Arena",
        imgUrl: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/lac.png"
      },
{
        name: "Minnesota Timberwolves",
        conference: "Western Conference",
        division: "Northwest Division",
        foundationyear: 1989,
        titles: 0,
        arena: "Target Center",
        imgUrl: "https://upload.wikimedia.org/wikipedia/pt/4/44/Minnesota_Timberwolves.png"
      },
{
        name: "New Orleans Pelicans",
        conference: "Western Conference",
        division: "Southwest Division",
        foundationyear: 2002,
        titles: 0,
        arena: "Smoothie King Center",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/New_Orleans_Pelicans_logo.svg/1200px-New_Orleans_Pelicans_logo.svg.png"
      },
{
        name: "Oklahoma City Thunder",
        conference: "Western Conference",
        division: "Northwest Division",
        foundationyear: 2008,
        titles: 1,
        arena: "Chesapeake Energy Arena",
        imgUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Oklahoma_City_Thunder.svg/1200px-Oklahoma_City_Thunder.svg.png"
      },
{
        name: "Phoenix Suns",
        conference: "Western Conference",
        division: "Pacific Division",
        foundationyear: 1968,
        titles: 0,
        arena: "Talking Stick Resort Arena",
        imgUrl: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/phx.png"
      },
{
        name: "Portland Trail Blazers",
        conference: "Western Conference",
        division: "Northwest Division",
        foundationyear: 1970,
        titles: 1,
        arena: "Moda Center",
        imgUrl: "https://s.yimg.com/cv/apiv2/default/nba/20181221/500x500/trailblazers_wbgs.png"
      },
{
        name: "San Antonio Spurs",
        conference: "Western Conference",
        division: "Southwest Division",
        foundationyear: 1967,
        titles: 5,
        arena: "AT&T Center",
        imgUrl: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/sa.png"
      },
{
        name: "Sacramento Kings",
        conference: "Western Conference",
        division: "Pacific Division",
        foundationyear: 1923,
        titles: 1,
        arena: "Golden 1 Center",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/1200px-SacramentoKings.svg.png"
      },
{
        name: "Utah Jazz",
        conference: "Western Conference",
        division: "Northwest Division",
        foundationyear: 1974,
        titles: 0,
        arena: "Vivint Smart Home Arena",
        imgUrl: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/utah.png"
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
        number: 12,
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
    {
        name: "Lamelo Ball",
            height: 2.01,
            weight: 82,
            number: 1,
            position: "Point Guard",
            team: "Charlotte Hornets",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1630163.png",
            playerVideo: "https://www.youtube.com/embed/7fAjeWeskfs"
        },
        {
            name: "Kemba Walker",
            height: 1.83,
            weight: 83,
            number: 15,
            position: "Point Guard",
            team: "Charlotte Hornets",
            icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6479.png",
            playerVideo: "https://www.youtube.com/embed/_kHZWvpKDi0"
            
        },
        {
            name: "Larry Johnson",
            height: 2.01,
            weight: 107,
            number: 2,
            position: "Small Forward",
            team: "Charlotte Hornets",
            icon: "https://cdn.statmuse.com/img/nba/players/larry-johnson-charlotte-hornets-min--hzlzro8n.png",
            playerVideo: "https://www.youtube.com/embed/-yYgcV0iOmw"
        },
    
    
    {
            name: "Neemias Queta",
            height: 2.13,
            weight: 113,
            number: 88,
            position: "Center",
            team: "Sacramento Kings",
            icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4397424.png",
            playerVideo: "https://www.youtube.com/embed/MxUlcg0I480"
        },
    {
            name: "Predrag Stojakovic",
            height: 2.08,
            weight: 104,
            number: 16,
            position: "Small Forward",
            team: "Sacramento Kings",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/978.png",
            playerVideo: "https://www.youtube.com/embed/nDtYeF2IsXg"
        },
    {
            name: "Chris Webber",
            height: 2.08,
            weight: 111,
            number: 4,
            position: "Center",
            team: "Sacramento Kings",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/185.png",
            playerVideo: "https://www.youtube.com/embed/CN2OLA7mSY4"
        },
    
    {
            name: "Nikola Jokic",
            height: 2.11,
            weight: 129,
            number: 15,
            position: "Center",
            team: "Denver Nuggets",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png",
            playerVideo: "https://www.youtube.com/embed/g1CdNe3Zodc"
        },
    {
            name: "Carmelo Anthony",
            height: 2.01,
            weight: 108,
            number: 15,
            position: "Small Forward",
            team: "Denver Nuggets",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/2546.png",
            playerVideo: "https://www.youtube.com/embed/a5LMozhAeUg"
        },
    {
            name: "Alex English",
            height: 2.03,
            weight: 86,
            number: 2,
            position: "Shooting Guard",
            team: "Denver Nuggets",
            icon: "https://cdn.statmuse.com/img/nba/players/alex-english-milwaukee-bucks-min--d6ycj27h.png",
            playerVideo: "https://www.youtube.com/embed/cALCmF92xYI"
        },
    {
            name: "Trae Young",
            height: 1.85,
            weight: 74,
            number: 11,
            position: "Point Guard",
            team: "Atlanta Hawks",
            icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277905.png",
            playerVideo: "https://www.youtube.com/embed/wotk0zU03v8"
        },
    {
            name: "Dikembe Mutombo",
            height: 2.18,
            weight: 120,
            number: 55,
            position: "Center",
            team: "Atlanta Hawks",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/87.png",
            playerVideo: "https://www.youtube.com/embed/qGDZ3S5Y2MI"
        },
    {
            name: "Dominique Wilkins",
            height: 2.03,
            weight: 104,
            number: 21,
            position: "Small Forward",
            team: "Atlanta Hawks",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1122.png",
            playerVideo: "https://www.youtube.com/embed/7Ju0mAzCLeA"
        },
    {
            name: "Chris Paul",
            height: 1.83,
            weight: 79,
            number: 3,
            position: "Point Guard",
            team: "Los Angeles Clippers",
            icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2779.png&w=350&h=254",
            playerVideo: "https://www.youtube.com/embed/rP8Lo5koK04"
        },
    {
            name: "Blake Griffin",
            height: 2.06,
            weight: 113,
            number: 32,
            position: "Power Forward",
            team: "Los Angeles Clippers",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/201933.png",
            playerVideo: "https://www.youtube.com/embed/OZ9o7owSUcQ"
        },
    {
            name: "DeAndre Jordan",
            height: 2.11,
            weight: 120,
            number: 9,
            position: "Center",
            team: "Los Angeles Clippers",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/201599.png",
            playerVideo: "https://www.youtube.com/embed/qJg2Hm8sJ6g"
        },
    {
            name: "Jr Smith",
            height: 1.98,
            weight: 100,
            number: 8,
            position: "Small Forward",
            team: "New York Knicks",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/2747.png",
            playerVideo: "https://www.youtube.com/embed/tO9HWY5XHKs"
        },
    {
            name: "Patrick Ewing",
            height: 2.03,
            weight: 115,
            number: 33,
            position: "Center",
            team: "New York Knicks",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/121.png",
            playerVideo: "https://www.youtube.com/embed/sgI0YCVse9U"
        },
    {
            name: "Walt Frazier",
            height: 1.93,
            weight: 90,
            number: 10,
            position: "Point Guard",
            team: "New York Knicks",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/76750.png",
            playerVideo: "https://www.youtube.com/embed/XSom-bb-vXw"
        },
    {
            name: "Giannis Antetokounmpo",
            height: 2.13,
            weight: 110,
            number: 34,
            position: "Power Forward",
            team: "Milwaukee Bucks",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png",
            playerVideo: "https://www.youtube.com/embed/j4QPE88Ctw0"
        },
    {
            name: "Kareem Abdul-Jabbar",
            height: 2.18,
            weight: 102,
            number: 33,
            position: "Center",
            team: "Milwaukee Bucks",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/76003.png",
            playerVideo: "https://www.youtube.com/embed/133YwacaFPQ"
        },
    {
            name: "Ray Allen",
            height: 1.96,
            weight: 93,
            number: 34,
            position: "Shooting Guard",
            team: "Milwaukee Bucks",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/951.png",
            playerVideo: "https://www.youtube.com/embed/tJOI1otlBh0"
        },
    {
            name: "Russel Westbrook",
            height: 1.91,
            weight: 91,
            number: 0,
            position: "Point Guard",
            team: "Oklahoma City Thunder",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/201566.png",
            playerVideo: "https://www.youtube.com/embed/dlEeZM_PUTA"
        },
    {
            name: "Steven Adams",
            height: 2.11,
            weight: 120,
            number: 12,
            position: "Center",
            team: "Oklahoma City Thunder",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/203500.png",
            playerVideo: "https://www.youtube.com/embed/tn__lgDncxM"
        },
    {
            name: "Gary Payton",
            height: 1.93,
            weight: 86,
            number: 20,
            position: "Point Guard",
            team: "Oklahoma City Thunder",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/56.png",
            playerVideo: "https://www.youtube.com/embed/YfS8lEzIVSo"
        },
    {
            name: "Reggie Miller",
            height: 2.01,
            weight: 88,
            number: 31,
            position: "Shooting Guard",
            team: "Indiana Pacers",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/397.png",
            playerVideo: "https://www.youtube.com/embed/MPPnqB8apoQ"
        },
    {
            name: "Jermaine O'Neal",
            height: 2.11,
            weight: 116,
            number: 7,
            position: "Power Forward",
            team: "Indiana Pacers",
            icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/615.png",
            playerVideo: "https://www.youtube.com/embed/T5Rg1fcaWEs"
        },
    {
            name: "Paul George",
            height: 2.03,
            weight: 100,
            number: 13,
            position: "Shooting Guard",
            team: "Indiana Pacers",
            icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4251.png",
            playerVideo: "https://www.youtube.com/embed/zVJDIWafQdA"
        },
    {
            name: "Paolo Banchero",
            height: 2.08,
            weight: 113,
            number: 5,
            position: "Power Forward",
            team: "Orlando Magic",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631094.png",
            playerVideo: "https://www.youtube.com/embed/2gUELdKBX3Q"
        },
     {
            name: "Dwight Howard",
            height: 2.08,
            weight: 120,
            number: 12,
            position: "Center",
            team: "Orlando Magic",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/2730.png",
            playerVideo: "https://www.youtube.com/embed/gZpSKnRETWI"
        },
    {
            name: "Penny Hardaway",
            height: 2.01,
            weight: 98,
            number: 1,
            position: "Point Guard",
            team: "Orlando Magic",
            icon: "https://hoopshype.com/wp-content/uploads/sites/92/2017/01/i_29_f5_c1_anfernee-hardaway.png?w=190",
            playerVideo: "https://www.youtube.com/embed/Ke-XJvKBDmA"
        },
    {
            name: "Zion Williamson",
            height: 1.98,
            weight: 129,
            number: 1,
            position: "Power Forward",
            team: "New Orleans Pelicans",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629627.png",
            playerVideo: "https://www.youtube.com/embed/0UhFmJhw-HY"
        },
    {
            name: "Anthony Davis",
            height: 2.08,
            weight: 115,
            number: 23,
            position: "Power Forward",
            team: "New Orleans Pelicans",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png",
            playerVideo: "https://www.youtube.com/embed/kGFHdjdjGZ4"
        },
    {
            name: "Alonzo Mourning",
            height: 2.08,
            weight: 118,
            number: 33,
            position: "Power Forward",
            team: "New Orleans Pelicans",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/297.png",
            playerVideo: "https://www.youtube.com/embed/buX2Ml4qTxM"
        },
    {
            name: "Devin Booker",
            height: 1.96,
            weight: 93,
            number: 1,
            position: "Shooting Guard",
            team: "Phoenix Suns",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1626164.png",
            playerVideo: "https://www.youtube.com/embed/547u1tC0Afc"
        },
    {
            name: "Steve Nash",
            height: 1.91,
            weight: 81,
            number: 13,
            position: "Point Guard",
            team: "Phoenix Suns",
            icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/592.png",
            playerVideo: "https://www.youtube.com/embed/nSM_Um9nKbg"
        },
    {
            name: "Charles Barkley",
            height: 1.98,
            weight: 114,
            number: 34,
            position: "Power Forward",
            team: "Phoenix Suns",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/787.png",
            playerVideo: "https://www.youtube.com/embed/pKqwFDrBpcI"
        },
    {
            name: "Julius Erving",
            height: 2.01,
            weight: 95,
            number: 6,
            position: "Power Forward",
            team: "Brooklyn Nets",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/76681.png",
            playerVideo: "https://www.youtube.com/embed/7uwWhwNPopY"
        },
    {
            name: "Brook Lopez",
            height: 2.16,
            weight: 127,
            number: 11,
            position: "Center",
            team: "Brooklyn Nets",
            icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3448.png&w=350&h=254",
            playerVideo: "https://www.youtube.com/embed/BwSbHuDJOTs"
        },
    {
            name: "Richard Jefferson",
            height: 2.01,
            weight: 106,
            number: 24,
            position: "Small Forward",
            team: "Brooklyn Nets",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/2210.png",
            playerVideo: "https://www.youtube.com/embed/cR8Jb7GoEmQ"
        },
    {
            name: "John Stockton",
            height: 1.85,
            weight: 77,
            number: 12,
            position: "Point Guard",
            team: "Utah Jazz",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/304.png",
            playerVideo: "https://www.youtube.com/embed/myMvojT6zIc"
        },
    {
            name: "Rudy Gobert",
            height: 2.15,
            weight: 111,
            number: 27,
            position: "Center",
            team: "Utah Jazz",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/203497.png",
            playerVideo: "https://www.youtube.com/embed/NIJ762z5f-c"
        },
    {
            name: "Donovan Mitchell",
            height: 1.85,
            weight: 98,
            number: 45,
            position: "Shooting Guard",
            team: "Utah Jazz",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628378.png",
            playerVideo: "https://www.youtube.com/embed/fIAXPvBraE8"
        },
    {
            name: "Gilbert Arenas",
            height: 1.93,
            weight: 98,
            number: 9,
            position: "Shooting Guard",
            team: "Washington Wizards",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/2240.png",
            playerVideo: "https://www.youtube.com/embed/3r_UyqHFzyk"
        },
    {
            name: "Elvin Hayes",
            height: 2.06,
            weight: 107,
            number: 11,
            position: "Power Forward",
            team: "Washington Wizards",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/76979.png",
            playerVideo: "https://www.youtube.com/embed/w4kF0U9RyYY"
        },
    {
            name: "Bradley Beal",
            height: 1.93,
            weight: 93,
            number: 3,
            position: "Shooting Guard",
            team: "Washington Wizards",
            icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6580.png&w=350&h=254",
            playerVideo: "https://www.youtube.com/embed/Oaf1A1XHz0M"
        },
    {
            name: "Tim Duncan",
            height: 2.11,
            weight: 113,
            number: 21,
            position: "Power Forward",
            team: "San Antonio Spurs",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1495.png",
            playerVideo: "https://www.youtube.com/embed/OL1sORY3Kh4"
        },
    {
            name: "Manu Ginobili",
            height: 1.98,
            weight: 92,
            number: 20,
            position: "Shooting Guard",
            team: "San Antonio Spurs",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1938.png",
            playerVideo: "https://www.youtube.com/embed/AJUhzQEPCvE"
        },
    {
            name: "DeMar DeRozan",
            height: 1.98,
            weight: 99,
            number: 11,
            position: "Power Forward",
            team: "San Antonio Spurs",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/201942.png",
            playerVideo: "https://www.youtube.com/embed/c9f3fMzyh1E"
        },
    {
            name: "Damian Lillard",
            height: 1.88,
            weight: 88,
            number: 0,
            position: "Point Guard",
            team: "Portland Trail Blazers",
            icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6606.png&w=350&h=254",
            playerVideo: "https://www.youtube.com/embed/zY8iKo5qKus"
        },
    {
            name: "Clyde Drexler",
            height: 2.01,
            weight: 95,
            number: 22,
            position: "Shooting Guard",
            team: "Portland Trail Blazers",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/17.png",
            playerVideo: "https://www.youtube.com/embed/V88F9c7kLFE"
        },
    {
            name: "Bill Walton",
            height: 2.11,
            weight: 95,
            number: 32,
            position: "Center",
            team: "Portland Trail Blazers",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/78450.png",
            playerVideo: "https://www.youtube.com/embed/LPGWnSwzj0M"
        },
    {
            name: "Kevin Garnett",
            height: 2.11,
            weight: 108,
            number: 21,
            position: "Power Forward",
            team: "Minnesota Timberwolves",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/708.png",
            playerVideo: "https://www.youtube.com/embed/UznV50oMSK0"
        },
    {
            name: "Karl-Anthony Towns",
            height: 2.11,
            weight: 112,
            number: 32,
            position: "Center",
            team: "Minnesota Timberwolves",
            icon: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3136195.png",
            playerVideo: "https://www.youtube.com/embed/uDH-j30pikc"
        },
    {
            name: "Kevin Love",
            height: 2.03,
            weight: 113,
            number: 0,
            position: "Power Forward",
            team: "Minnesota Timberwolves",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/201567.png",
            playerVideo: "https://www.youtube.com/embed/nJa0j-lJzio"
        },
    {
            name: "Kyrie Irving",
            height: 1.88,
            weight: 88,
            number: 11,
            position: "Shooting Guard",
            team: "Cleveland Cavaliers",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png",
            playerVideo: "https://www.youtube.com/embed/NR7im1BCl8Q"
        },
    {
            name: "Darius Garland",
            height: 1.85,
            weight: 87,
            number: 10,
            position: "Shooting Guard",
            team: "Cleveland Cavaliers",
            icon: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629636.png",
            playerVideo: "https://www.youtube.com/embed/kBoaoIl8c1s"
        },
    {
            name: "Larry Nance",
            height: 2.08,
            weight: 93,
            number: 22,
            position: "Center",
            team: "Cleveland Cavaliers",
            icon: "https://cdn.statmuse.com/img/nba/teams/Phoenix-Suns-Silhouette.png",
            playerVideo: "https://www.youtube.com/embed/oV6lxF7onik"
        },
]