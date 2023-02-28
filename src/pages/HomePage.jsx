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

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }

    if (search) {
      data = data.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);
  const navigate = useNavigate();

  return (
    <>
      <Controls onSearch={handleSearch} />
      <ListCountries>
        {filteredCountries.map((country) => {
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
