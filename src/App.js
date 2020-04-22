import React, { useEffect, useState } from "react";
//import "./App.css";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import germ from "./images/covid-19-logo.jpg";

function App() {
  const [data, setData] = useState();
  const [country, setCountry] = useState();

  async function getData() {
    const data = await fetchData();
    setData(data);
    //console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  async function handleCountryChange(country) {
    setData(await fetchData(country));
    setCountry(country);
  }

  return (
    <div className={styles.container}>
      <img src={germ} className={styles.image} alt="covid-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
