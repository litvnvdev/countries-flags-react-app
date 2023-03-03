import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';

import { searchByCountry } from '../config.js';
import InfoDetails from '../components/InfoDetails.jsx';

const ButtonBack = styled.button`
  transition: 0.2s;
  background: var(--color-ui-base)
  border: 2px solid var(--border);
  cursor: pointer;
  box-shadow: var(--shadow);
  margin-right: 10px;
  width: 50px;
  height: 50px;
  color: var(--color-text);
  font-size: 22px;
  border-radius: 50%;
`;

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);
  return (
    <>
      <ButtonBack onClick={() => navigate(-1)}>
        <IoArrowBack />
      </ButtonBack>
      {country && <InfoDetails {...country} navigate={navigate} />}
    </>
  );
};

export default Details;
