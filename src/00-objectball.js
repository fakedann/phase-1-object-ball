function gameObject() {

 return {
    home: {
        teamName: "Brooklyn Nets",
        colors: ['Black', 'White'],
        players: {
            'Alan Anderson': {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                'slam dunks': 1
            },
            'Reggie Evans': {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                'slam dunks': 7
            },
            'Brook Lopez': {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                'slam dunks': 15
            },
            'Mason Plumlee': {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                'slam dunks': 5
            },
            'Jason Terry': {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                'slam dunks': 1
            }
        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ['Turquoise', 'Purple'],
        players: {
            'Jeff Adrien': {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                'slam dunks': 2
            },
            'Bismak Biyombo': {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                'slam dunks': 10
            },
            'Desagna Diop': {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                'slam dunks': 5
            },
            'Ben Gordonn': {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                'slam dunks': 0
            },
            'Brendan Haywood': {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                'slam dunks': 12
            }

        }

    }
 }
}

function homeTeamName(){
    let obj = gameObject();
    return obj['home']['teamName']
}

function numPointScored(playernName){
    const game = gameObject();
    for (const gameKey in game){
        const teamObj = game[gameKey];
        for (const teamKey in teamObj){
            const playerObj = teamObj.players;
            for ( const playerKey in playerObj){
                if (playerKey === playernName){
                    return playerObj[playerKey].points
                }
            }
        }
    }

}

function shoeSize(playernName){
    const game = gameObject();
    for (const gameKey in game){
        const teamObj = game[gameKey];
        for (const teamKey in teamObj){
            const playerObj = teamObj.players;
            for (const playerKey in playerObj){
                if (playerKey === playernName){
                    return playerObj[playerKey].shoe;
                }
            }
        }
    }

}

function teamColors(tmName){
    const game = gameObject();
    for (const gameKey in game){
        const teamObj = game[gameKey];
        if (teamObj.teamName === tmName){
            return teamObj.colors;
        }
    }
}

function teamNames(){
    const game = gameObject();
    const arr = []
    arr.push(game.home.teamName);
    arr.push(game.away.teamName);
    return arr;
}

function playerNumbers(tmName){
    const game = gameObject();
    const arr = [];
    for (const gameKey in game){
        const teamObj = game[gameKey];
        if (teamObj.teamName === tmName){
            const jugadores = teamObj.players;              
            for (const playerKey in jugadores){
                arr.push(jugadores[playerKey].number);
    
            }
        } 
    }
    return arr;    

}

function playerStats(playernName){
    const game = gameObject();
    for (const gameKey in game){
        const jugadores = game[gameKey].players;              
        for (const playerKey in jugadores){
            if (playerKey === playernName){
               console.log(jugadores[playerKey]);
               break
            }
        } 
    }   

}

function bigShoeRebounds(){
    const game = gameObject();
    let size = 0;
    let person;
    for (const gameKey in game){
        const jugadores = game[gameKey].players;
        for (const playerKey in jugadores){
            if ( size < jugadores[playerKey].shoe){
                person = jugadores[playerKey];
                size = jugadores[playerKey].shoe;
            }
        }
    }
    console.log(person.rebounds)
}

console.log(numPointScored('Alan Anderson'));
console.log(shoeSize('Alan Anderson'));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Brooklyn Nets"));
playerStats('Brendan Haywood');
bigShoeRebounds();

