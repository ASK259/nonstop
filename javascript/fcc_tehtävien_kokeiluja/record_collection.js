const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (prop == "tracks" & value == "") {
    delete records[id].tracks;
  } else if (prop == "artist" & value == "") {
    delete records[id].artist;
  } else if (prop != "tracks" & prop != "albumTitle" & value != "") {
    records[id].artist = value;
  } else if (prop == "tracks" & records[id].hasOwnProperty("tracks") == true) {
    records[id].tracks.push(value);
  } else if (prop == "tracks" & records[id].hasOwnProperty("tracks") == false) {
    records[id].tracks = [value];
  } else if (prop == "albumTitle") {
    records[id].albumTitle = value;
  }
  return records;
};

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
console.log(updateRecords(recordCollection, 2548, "artist", ""));
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));
console.log(updateRecords(recordCollection, 2548, "artist", ""));
