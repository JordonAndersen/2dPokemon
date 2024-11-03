import React, { useEffect, useState } from "react";
import './pokemonsprite.css'

const Pokemon = () => {
  const [pokeImage, setPokeImage] = useState(null); // Store Pokemon image URL
  const [loading, setLoading] = useState(true); // Loading state
  const [latitude, setLatitude] = useState(null); // User's latitude
  const [longitude, setLongitude] = useState(null); // User's longitude

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await fetch(
          "https://ipgeolocation.abstractapi.com/v1/?api_key=47e48734a6fc4571b20ab08b9c4e2fd4"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user location");
        }
        const data = await response.json();
        console.log("User location data:", data);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
      } catch (error) {
        console.error("Error fetching user location:", error);
      }
    };

    fetchUserLocation();
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!latitude || !longitude) return; // Wait until latitude and longitude are fetched

      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=is_day,precipitation,rain,showers,snowfall&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&forecast_days=1`
        );
        if (!response.ok) {
          throw new Error(
            `Failed to fetch weather data: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("Weather data:", data);

        // Example logic to determine Pokemon based on weather data
        let pokemonName;
        const issnow = data.current.snowfall
        console.log(issnow);
        const israining = data.current.rain
        console.log(israining);
        const isshowering = data.current.showers
        console.log(isshowering);
        // const temperature = data.hourly.temperature_2m[0].value;
        // console.log("Current temperature:", temperature);

        if (israining > 0) {
          console.log("its Raining")
          pokemonName = "lapras"

        }
        else if (issnow > 0) {
          console.log("its snowing")
          pokemonName = "spheal"

        }
        else if (isshowering > 0) {
          console.log("its showering")
          pokemonName = "squirtle"

        }
        else {
          pokemonName = "spheal"

        }

        // if (temperature < 10) {
        //   pokemonName = "lapras"; // Cold weather example
        // } else if (temperature >= 10 && temperature <= 20) {
        //   pokemonName = "squirtle"; // Moderate weather example
        // } else {
        //   pokemonName = "charmander"; // Hot weather example
        // }

        const n = 1000; // Replace with the desired range, e.g., length of Pokémon list
        const randomNum = Math.floor(Math.random() * n);

        const pokemonRandom = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0`
        );

        console.log("pokemon random", pokemonRandom)

        // Fetch Pokemon data based on determined Pokemon name
        const pokemonResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        if (!pokemonResponse.ok) {
          throw new Error(
            `Failed to fetch Pokémon data: ${pokemonResponse.status} ${pokemonResponse.statusText}`
          );
        }
        const pokemonData = await pokemonResponse.json();
        console.log(pokemonData)
        const imageUrl = pokemonData.sprites.versions["generation-viii"].icons.front_default;
        console.log("Pokémon image URL:", imageUrl);
        setPokeImage(imageUrl);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [latitude, longitude]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokeImage) {
    return <div>Error fetching Pokémon data</div>;
  }

  return (
    <img
      src={pokeImage}
      alt={`Pokemon`}
      style={{ position: "absolute", left: 150, top: 150, }}
      className="pokemonimg"
    />
  );
};

export default Pokemon;
