import { render, screen } from '@testing-library/react';
import App from './App';
import * as math from './utils/math';

// jest.mock('./utils/math.js'); // With this que mock All Exports with Jest.fn()

jest.mock('./utils/math.js', () => {

  const originalModule = jest.requireActual('./utils/math.js');

  return (
    {
    __esModule: true,
    ...originalModule,
    default: () => 'Mocked Double and Add',
    add: () => 'Mocked Add'
    }
  );


})

test('We Mock the Module and just change Add and Default', () => {
 
    
  render(<App numberA={2} numberB={10} />);

  console.log(screen.debug())

  expect(screen.getByText(/add=/i)).toHaveTextContent('ADD=Mocked Add');

  expect(screen.getByText(/subtract=/i)).toHaveTextContent('8');

  expect(screen.getByText(/doubles and adds/i)).toHaveTextContent('Mocked Double and Add');

  expect(screen.getByText(/multiplication=/i)).toHaveTextContent('20');
 
});