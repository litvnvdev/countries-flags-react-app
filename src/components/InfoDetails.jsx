import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { filterCountryByCode } from '../config';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(200px, 600px);
  }
`;
const InfoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const InfoTitle = styled.h2`
  margin: 0;
  font-weight: var(--normal);
`;
const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
  }
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  line-height: 1.8;
  & > b {
    font-weight: var(--fw-bold);
  }
`;
const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;
const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
const Tag = styled.span`
  transition: 0.2s;
  padding: 0 1rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    color: var(--color-on-hover);
    background-color: var(--color-on-hover);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
  }
`;

const InfoDetails = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    navigate,
  } = props;

  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    axios
      .get(filterCountryByCode(borders))
      .then(({ data }) => setNeighbors(data.map((country) => country.name)));
  }, [borders]);
  return (
    <Wrapper>
      <InfoImg src={flag} alt={name} />
      <div>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              Native Name: <b>{nativeName}</b>
            </ListItem>
            <ListItem>
              Population: <b>{population}</b>
            </ListItem>
            <ListItem>
              Region: <b>{region}</b>
            </ListItem>
            <ListItem>
              Sub Region: <b>{subregion}</b>
            </ListItem>
            <ListItem>
              Capital: <b>{capital}</b>
            </ListItem>
          </List>
          <List>
            <ListItem>
              Top Level Domain:{' '}
              {topLevelDomain.map((domain) => (
                <span key={domain}>{domain}</span>
              ))}
            </ListItem>
            <ListItem>
              Currencies:{' '}
              {currencies.map((currency) => (
                <span key={currency.code}>{currency.name} </span>
              ))}
            </ListItem>
            <ListItem>
              Languages:{' '}
              {languages.map((lang) => (
                <span key={lang.name}>{`${lang.name}, `}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries:</b>
          {!borders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((neighbor) => (
                <Tag onClick={() => navigate(`/country/${neighbor}`)} key={neighbor}>
                  {neighbor}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};

export default InfoDetails;
