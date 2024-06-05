const regionData = {{state.responses}}.reduce((acc, row) => {
  acc[row.country] = (acc[row.country] || 0) + 1;
  return acc;
}, {});

const countries = {
    "USA": { "latitude": 37.09024, "longitude": -95.712891 },
    "Spain": { "latitude": 40.463667, "longitude": -3.74922 },
    "Germany": { "latitude": 51.165691, "longitude": 10.451526 },
    "Australia": { "latitude": -25.274398, "longitude": 133.775136 },
    "Canada": { "latitude": 56.130366, "longitude": -106.346771 },
    "UK": { "latitude": 55.378051, "longitude": -3.435973 }
};

return Object.entries(regionData).map(([name, count]) => {return  {name, value: count, ...countries[name] } });