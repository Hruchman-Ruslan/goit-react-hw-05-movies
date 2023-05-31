import React from 'react';
import gifDefault from '../../Gif/40Oj.gif';

export const CastInfo = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, character, original_name, profile_path }) => (
        <li key={id}>
          {profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={original_name}
            />
          ) : (
            <img src={gifDefault} alt={original_name} width={180} />
          )}
          <h2>{original_name}</h2>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
