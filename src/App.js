import { useState } from 'react';

import Background from './components/Background';
import FrontCard from './components/FrontCard';
import BackCard from './components/BackCard';
import Form from './components/Form';

function App() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [cvc, setCvc] = useState('');

  const props={
    name,
    cardNumber,
    year,
    month,
    cvc
  };

  const setters = {
    setName,
    setCardNumber,
    setYear,
    setMonth,
    setCvc
  };

  return (
    <div className="App">
      <Background>
        <FrontCard name={name} cardNumber={cardNumber} year={year} month={month}/>
        <BackCard cvc={cvc}/>
        <Form setters={setters} propsInfo={props}/>
      </Background>
    </div>
  );
}

export default App;