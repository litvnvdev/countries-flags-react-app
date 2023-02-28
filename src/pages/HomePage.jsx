import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ALL_COUNTRIES } from '../config.js';
import Controls from '../components/Controls';
import ListCountries from '../components/ListCountries';
import Card from '../components/Card';

const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  useEffect(() => {
    if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Controls />
      <ListCountries>
        {countries.map((country) => {
          const countryInfo = {
            img: country.flags.png,
            name: country.name,
            info: [
              {
                title: 'Population',
                description: country.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: country.region,
              },
              {
                title: 'Capital',
                description: country.capital,
              },
            ],
          };
          return (
            <Card
              key={country.name}
              onClick={() => navigate(`/country/${country.name}`)}
              {...countryInfo}
            />
          );
        })}
      </ListCountries>
    </>
  );
};

export default HomePage;
