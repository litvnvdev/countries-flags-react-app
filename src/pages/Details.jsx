import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  return <div onClick={() => navigate(-1)}>Details {name}</div>;
};

export default Details;
