import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import MovieForm from '../MovieForm';

// after every test runs, it's going to remove everything from the DOM\
afterEach(cleanup)

const onSubmit = jest.fn();

test('<MovieForm />', () => {
  // render the component
  const { queryByTestId, getByText, getByLabelText
  } = render(<MovieForm submitForm={onSubmit} />);
  //write some tests
  expect(queryByTestId('movie-form')).toBeTruthy();

  // console.log(getByLabelText('Text').outerHTML)
  fireEvent.change(getByLabelText('Text'), {
    target: { value: 'hello' }
  })

  fireEvent.click(getByText('Submit'));
  expect(onSubmit).toHaveBeenCalledTimes(1)
  expect(onSubmit).toHaveBeenCalledWith({
    text: 'hello'
  })
})