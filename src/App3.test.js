import { render, screen } from '@testing-library/react';
import App from './App';
import * as math from './utils/math';

jest.mock('./utils/math.js'); 

test('We Mock the Module and just change Add and Default', () => {
 
  math.default.mockReturnValue('Testing Double and Add Mock');

  math.add.mockReturnValue('Testing Add Mock');
    
  render(<App numberA={2} numberB={10} />);

  console.log(screen.debug())

  expect(screen.getByText(/add=/i)).toHaveTextContent('Testing Add Mock');

  // expect(screen.getByText(/subtract=/i)).toHaveTextContent('8');

  expect(screen.getByText(/doubles and adds/i)).toHaveTextContent('Testing Double and Add Mock');

  // expect(screen.getByText(/multiplication=/i)).toHaveTextContent('20');
 
});