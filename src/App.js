import { useState } from 'react';
import styled from 'styled-components';
import doubleAndAdd from './utils/math';
import * as math from './utils/math';


const StyledLabel = styled.label`

  padding: 10px 0;
  margin-right: 30px;
  margin-bottom: 20px;

  & > input {
    margin-left: 10px;
  }

`

const StyledResult = styled.div`

  padding: 10px 0;
  
`;


function App({ numberA, numberB }) {

  const [numA, setNumA] = useState(numberA || 0);

  const [numB, setNumB] = useState(numberB || 0);

  const handleChangeA = (e) => {

    if(!e.target.value || !parseInt(e.target.value)) return;

    setNumA(parseInt(e.target.value));

  };

  const handleChangeB = (e) => {

    if(!e.target.value || !parseInt(e.target.value)) return;

    setNumB(parseInt(e.target.value));


  };

  return (
    <div className="App">
      <h1>
        CALCULATOR
      </h1>
      <form>
        <StyledLabel>
          Numero A
          <input type="text" onChange={handleChangeA} value={numA} />
        </StyledLabel>
        <StyledLabel>
          Numero B
          <input type="text" onChange={handleChangeB} value={numB} />
        </StyledLabel>
        <StyledResult>
          {`ADD=${math.add(numA, numB)}`}
        </StyledResult>
        <StyledResult>
          {`SUBTRACT=${math.subtract(numA, numB)}`}
        </StyledResult>
        <StyledResult>
          {`MULTIPLICATION=${math.multiply(numA, numB)}`}
        </StyledResult>
        <StyledResult>
          {`DIVISION=${numA !== 0 ? math.divide(numA, numB) : 0}`}
        </StyledResult>
        <StyledResult>
          {`DOUBLES AND ADDS=${doubleAndAdd(numA, numB)}`}
        </StyledResult>
      </form>
    </div>
  );
}

export default App;
