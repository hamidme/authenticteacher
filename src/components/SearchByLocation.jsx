import React from "react";
import { locations } from "./SearchBy";
import { LocationLists } from "./styles/Main.style";

const SearchByLocation = () => {
  return (
    <>
      <LocationLists>
        {locations.map((location) => (
          <li key={location.id}>
            <img src={location.image} alt={location.name} />
            <p>{location.name}</p>
          </li>
        ))}
      </LocationLists>
    </>
  );
};

export default SearchByLocation;
