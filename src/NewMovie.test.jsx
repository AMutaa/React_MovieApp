import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import NewMovie from './NewMovie';

// after every test runs, it's going to remove everything from the DOM\
afterEach(cleanup)
test('<NewMovie/>', () => {
  // render the component
  const { debug, getByTestId, queryByTestId, container, getByText } = render(<NewMovie />);
  //write some tests
  expect(getByTestId('page-title').textContent).toBe('New Movie')
  expect(queryByTestId('movie-form')).toBeTruthy();
  // console.log(container)
  expect(container.firstChild).toMatchSnapshot()
})