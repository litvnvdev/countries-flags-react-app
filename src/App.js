import axios from 'axios';
import { useState, useEffect } from 'react';

import { ALL_COUNTRIES } from './config.js';
import Controls from './components/Controls';
import Header from './components/Header';
import Main from './components/Main';
import ListCountries from './components/ListCountries.jsx';
import Card from './components/Card.jsx';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  return (
    <>
      <Header />
      <Main>
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
            return <Card key={country.name} {...countryInfo} />;
          })}
        </ListCountries>
      </Main>
    </>
  );
}

export default App;
