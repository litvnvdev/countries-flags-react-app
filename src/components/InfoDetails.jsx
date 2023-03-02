import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section``;
const InfoImg = styled.img``;
const InfoTitle = styled.h2``;
const ListGroup = styled.div``;
const List = styled.ul``;
const ListItem = styled.li``;
const Meta = styled.div``;
const TagGroup = styled.div``;
const Tag = styled.span``;

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
              {borders.map((border) => (
                <Tag key={border}>{border}</Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};

export default InfoDetails;
