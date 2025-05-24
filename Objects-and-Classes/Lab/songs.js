function solve(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    const songsCount = input[0];
    const necessaryTypeList = input[input.length - 1];
    const songs = [];

    for (let i = 1; i <= songsCount; i++) {
        const [typeList, songName, songTime] = input[i].split('_');
        songs.push(new Song(typeList, songName, songTime));
    }

    if (necessaryTypeList === 'all') {
        return songs.forEach(song => console.log(song.name));
    }
    
    songs.filter((song) => song.type === necessaryTypeList)
        .forEach((song) => console.log(song.name));
}


solve([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
console.log('');

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
console.log('');

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);
