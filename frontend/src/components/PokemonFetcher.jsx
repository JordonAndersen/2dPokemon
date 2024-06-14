import React, { useEffect, useState } from "react";

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
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
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
        const temperature = data.hourly.temperature_2m[0].value; // Assuming you want the first hourly temperature
        console.log("Current temperature:", temperature);

        if (temperature < 10) {
          pokemonName = "lapras"; // Cold weather example
        } else if (temperature >= 10 && temperature <= 20) {
          pokemonName = "squirtle"; // Moderate weather example
        } else {
          pokemonName = "charmander"; // Hot weather example
        }

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
        const imageUrl = pokemonData.sprites.front_default;
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
      style={{ position: "absolute", left: 150, top: 150 }}
    />
  );
};

export default Pokemon;
