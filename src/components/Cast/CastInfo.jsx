import React from 'react';
import gifDefault from '../../gif/40Oj.gif';
import { CastTitle, CastText, Img, Item, List } from './CastInfo.styled';

export const CastInfo = ({ cast }) => {
  return (
    <List>
      {cast.map(({ id, character, original_name, profile_path }) => (
        <Item key={id}>
          {profile_path ? (
            <Img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={original_name}
            />
          ) : (
            <Img src={gifDefault} alt={original_name} />
          )}
          <CastTitle>{original_name}</CastTitle>
          <CastText>Character: {character}</CastText>
        </Item>
      ))}
    </List>
  );
};
