import React from "react";
import {
  StyleHero,
  StyleSearchHeading,
  SearchDes,
  SearchHeading,
  SearchTagLine,
  SearchBars,
  SearchArea,
  SearchBarHeadings,
  SearchButton,
  PopularSearchButton,
  PopularSearchLists,
} from "./styles/Hero.style";
import imgtutor from "../images/imgtutor.png";

const Hero = () => {
  return (
    <>
      <StyleHero>
        <StyleSearchHeading>
          <SearchDes>
            <SearchHeading>
              Hire authentic teachers at your budget!
            </SearchHeading>
            <SearchTagLine>
              Find Jobs, Employment & Career Opportunities
            </SearchTagLine>
          </SearchDes>
          <div>
            <img src={imgtutor} alt="teacher image" />
          </div>
        </StyleSearchHeading>

        <SearchBars>
          <SearchArea>
            <SearchBarHeadings>What job are you looking for?</SearchBarHeadings>
            <input type="text" placeholder="Job title, Skill" />
          </SearchArea>
          <SearchArea>
            <SearchBarHeadings>Where</SearchBarHeadings>
            <input type="text" placeholder="City, State" />
          </SearchArea>
          <SearchArea>
            <SearchBarHeadings>Position</SearchBarHeadings>
            <input type="text" placeholder="All Categories" />
          </SearchArea>
        </SearchBars>

        <PopularSearchButton>
          <PopularSearchLists>
            <li>
              <strong>Popular Searches</strong>
            </li>
            <li>chemistry Teacher in Abuja</li>
            <li>Physics Teacher in Lagos</li>
            <li>School Principal in Abuja</li>
          </PopularSearchLists>
          <SearchButton>Search</SearchButton>
        </PopularSearchButton>
      </StyleHero>
    </>
  );
};

export default Hero;
