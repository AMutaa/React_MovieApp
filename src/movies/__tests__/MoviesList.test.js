import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom'
import MoviesList from '../MoviesList';


global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});


console.error = jest.fn();

const movies = {
  results: [
    {
      id: 'hi',
      title: 'Level Up',
      poster_path: 'adsfadsfa.jpg',
    }, {
      id: 'hix',
      title: 'Level Up',
      poster_path: 'adsfadsfa.jpg',
    }, {
      id: 'his',
      title: 'Level Up',
      poster_path: 'adsfadsfa.jpg',
    },
    {
      id: 'hid',
      title: 'Level Up',
      poster_path: 'adsfadsfa.jpg',
    }
  ]
}

const movie = movies.results[0];

test('<MoviesList />', async () => {
  fetch.mockResponseOnce(JSON.stringify(movies));
  const { getByTestId, queryByTestId, getAllByTestId, debug } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  );
  // checking loading state
  expect(getByTestId('loading')).toBeTruthy()
  //wait to see if a movie link shows up with our fake data
  await waitForElement(() => getByTestId('movie-link'))
  //no longer expect the loading state to be there
  expect(queryByTestId('loading')).toBeFalsy()
  //check to see if the movie link has the correct path
  expect(getByTestId('movie-link').getAttribute('href')).toBe(`/${movie.id}`)
  //test that all the movie links that we found are going to the same number as we are expecting to see
  expect(getAllByTestId('movie-link').length).toBe(movies.results.length)

});
