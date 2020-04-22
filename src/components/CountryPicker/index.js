import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, Slide } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

export default function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  async function fetchApi() {
    setFetchedCountries(await fetchCountries());
  }

  useEffect(() => {
    fetchApi();
  }, [setFetchedCountries]);

  return (
    <Slide direction="up" in={true}>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {fetchedCountries.map((country, i) => (
            <option value={country} key={i}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Slide>
  );
}
