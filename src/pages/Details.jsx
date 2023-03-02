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
  border: 2px solid #000;
  cursor: pointer;
  box-shadow: var(--shadow);
  margin-right: 10px;
  width: 50px;
  height: 50px;
  color: var(--color-text);
  font-size: 22px;
  border-radius: 50%;
  &:hover {
    background: #fff;
    border: 3px solid #fff;
  }
`;

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);
  return (
    <>
      <ButtonBack onClick={() => navigate(-1)}>
        <IoArrowBack />
      </ButtonBack>
      {country && <InfoDetails {...country} />}

      <span>{name}</span>
    </>
  );
};

export default Details;
