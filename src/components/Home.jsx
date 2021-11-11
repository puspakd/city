import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/history",
      params : {country:'india', day:'2020-06-02'},
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "64c8540cf2mshe3e9fd3548f32f0p1d27a5jsn53a04e212c9f",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return <div></div>;
};

export default Home;
