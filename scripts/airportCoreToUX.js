const fs = require("fs");

async function processLineByLine() {
  const coreDataRaw = fs.readFileSync("airports-core.json");
  const coreData = JSON.parse(coreDataRaw);
  let airports = [];

  for (const [iata, data] of Object.entries(coreData)) {
    airports.push({
      IATA: iata,
      name: data.name,
      city: data.city,
      country: data.country,
      lat: data.lat,
      lon: data.lon,
      passengers: 0,
    });
  }

  fs.writeFile("airports.json", JSON.stringify(airports, null, 2), err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been created");
  });
}

processLineByLine();
