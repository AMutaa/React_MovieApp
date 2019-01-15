import React from 'react';
import { render, cleanup } from 'react-testing-library';
import MovieDetail from './MovieDetail';

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

const match = {
  params: {
    id: 'ghhdhdbnnbd'
  }
}

console.error = jest.fn();

test('<MovieDetail />', () => {

  fetch.mockResponseOnce(JSON.stringify({
    movie: {
      id: 'djshd',
      title: 'Level Up'
    }
  }))

  const { debug } = render(<MovieDetail match={match} />);
  debug();
});
