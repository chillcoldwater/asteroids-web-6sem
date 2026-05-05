export class AsteroidController {
  static async getAsteroids() {
    const response = await fetch(
      "https://neows-proxy.vercel.app/api/asteroids",
    );
    const data = await response.json();
    const todayDate = new Date().toISOString().split("T")[0];
    const todayAsteroid = data.near_earth_objects[todayDate];

    const asteroids = todayAsteroid.map(AsteroidController.mapAsteroid);
    return asteroids;
  }

  static async getAsteroid(asteroidId) {
    const response = await fetch(`https://neows-proxy.vercel.app/api/asteroids/${asteroidId}`)
    const data = await response.json()
    return data
  }
  static mapAsteroid(asteroid) {
    const diameterMeters = asteroid.estimated_diameter.meters;
    const calculatedDiameterMeters = (
      (diameterMeters.estimated_diameter_max +
        diameterMeters.estimated_diameter_min) /
      2
    ).toFixed(0);
    return {
      id: asteroid.id,
      name: asteroid.name,
      isDanger: asteroid.is_potentially_hazardous_asteroid,
      diameter: calculatedDiameterMeters,
      distance: parseFloat(
        asteroid.close_approach_data[0].miss_distance.kilometers,
      ).toFixed(2),
      date: asteroid.close_approach_data[0].close_approach_date,
    };
  }
}

const defaultAsteroids = [
  {
    name: "арбуз",
    distance: 5145,
    diameter: 500,
    date: "30-05-2023",
    isDanger: false,
  },
  {
    name: "дыня",
    distance: 1000,
    diameter: 100,
    date: "25-05-2020",
    isDanger: true,
  },
  {
    name: "вкусный фрукт",
    distance: 3000,
    diameter: 300,
    date: "24-05-2020",
    isDanger: false,
  },
  {
    name: "яблоко",
    distance: 70000,
    diameter: 700,
    date: "23-05-2020",
    isDanger: false,
  },
];
