import { render, screen } from '@testing-library/react';
import App from './App';
import * as math from './utils/math';

const originalAdd = math.add;

test('We Mock function Add and Subtract (only)', () => {
  
  math.add = jest.fn(() => 'Mocked Add');

  math.subtract = jest.fn(() => 'Mocked Subtract');
  
  render(<App numberA={2} numberB={10} />);

  expect(screen.getByText(/add=/i)).toHaveTextContent('ADD=Mocked Add');

  expect(screen.getByText(/subtract=/i)).toHaveTextContent('SUBTRACT=Mocked Subtract');

  expect(math.subtract).toHaveBeenCalledTimes(1);

  expect(math.subtract).toHaveBeenCalledWith(2, 10);
});

test('Testing add and subtract directly', () => {

  math.add = originalAdd;
  
  expect(math.add(2, 5)).toBe(7)

});


