import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./../Search/Search";
import { useHistory } from "react-router-dom";

const Banner = () => {
  // if you push something into history , it will redirect
  // you to that page
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          {" "}
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;

// to install date-time-picker
// 1. npm i react-date-range
// 2. npm i date-fns
// 3. follow above code
