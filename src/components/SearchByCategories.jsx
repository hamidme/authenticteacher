import React from "react";
import { CategoriesLists } from "./styles/Main.style";
import { categories } from "./SearchBy";

const SearchByCategories = () => {
  return (
    <>
      <CategoriesLists>
        {categories.map((job) => (
          <li key={job.id}>
            <img src={job.image} alt={job.name} />
            <p>{job.name}</p>
          </li>
        ))}
      </CategoriesLists>
    </>
  );
};

export default SearchByCategories;
