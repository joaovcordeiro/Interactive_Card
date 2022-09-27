import { useState, useEffect } from 'react';
import styled from 'styled-components';
import complete from '../assets/images/icon-complete.svg';

function Form({setters, propsInfo}) {
    const {setName, setCardNumber, setYear, setMonth, setCvc} = setters;
    const {name, cardNumber, year, month, cvc} = propsInfo;
    const [sucess, setSucess] = useState(false);
    const [subimited, setSubmited] = useState(false);
    const [nameError, setNameError] = useState('');
    const [dateError, setDateError] = useState('');
    const [cardNumberError, setCardNumberError] = useState('');
    const [cvcError, setCvcError] = useState('');

    useEffect(() => {
        if(nameError === '' && dateError === '' && cardNumberError === '' && cvcError === '' && subimited) {
            setSucess(true);
        }
    }, [nameError, dateError, cardNumberError, cvcError, subimited]);

    function formatCardNumber(number) {
        return number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
    
    function formatFormName(name) {
        if(name) return name.split(' ').map(letter => { 
            return letter.charAt(0).toUpperCase() + letter.slice(1)}).join(' ').replace(/\s{2,}/g, ' ');
    }

    async function handleSubmit(e) {
        e.preventDefault();
        verifyFormInputs();
        setSubmited(true);
    }

    function verifyFormInputs() {
        (name === '') ? setNameError("Can't be blank") : setNameError('');
        
        (month === '' || year === '') ? setDateError("Can't be blank") 
        : (isNaN(month) || isNaN(year))
        ? setDateError('Invalid date') 
        : setDateError('');

        verifyNan(cvc, setCvcError);
        verifyNan(cardNumber, setCardNumberError);
    }

    function verifyNan(value, callback) {
        const format = value.replace(/\s/g, '');
        (format === '') ? callback("Can't be blank") 
        : (isNaN(format)) ? callback("Wrong format, numbers only") 
        : callback('');
    }
    
    if(sucess) {
        return (<CardFormContainer>
            <SucessIcon src={complete}/>
            <SucessTittle>THANK YOU!</SucessTittle>
            <SucessText>We've added your card details</SucessText>
            <FormButton onClick={() => document.location.reload()}>Continue</FormButton>
        </CardFormContainer>)
    }
    else{

   return(
    <CardFormContainer>
        <CardForm onSubmit={handleSubmit}>
            <CardFormLabel htmlFor='name'>CARDHOLDER NAME</CardFormLabel>
            <CardFormInput 
                error={nameError ? "hsl(0, 100%, 66%)" : "rgb(221,221,221)"}
                name='name'
                type="text" 
                value={formatFormName(name)} 
                placeholder = 'e.g.Jane Appleseed'
                maxLength={30}
                onChange={(e) => setName(e.target.value)} 
            />
            <Error>{nameError}</Error>
            <CardFormLabel htmlFor='cardNumber'>CARD NUMBER</CardFormLabel>
            <CardFormInput
                error={cardNumberError ? "hsl(0, 100%, 66%)" : "rgb(221,221,221)"}
                name='cardNumber'
                type="text"
                placeholder='e.g. 1234 5678 9123 0000'
                value={cardNumber}
                maxLength='19'
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            />
            <Error>{cardNumberError}</Error>
            <CardDateCVCContainer>
                <CardDateContainer>
                    <CardFormLabel>EXP. DATE (MM/YY)</CardFormLabel>
                    <DateContainer>
                        <CardFormInput
                            error={dateError ? "hsl(0, 100%, 66%)" : "rgb(221,221,221)"}
                            name='month'
                            type="text"
                            placeholder='MM'
                            value={month}
                            minLength='2'
                            maxLength='2'
                            onChange={(e) => setMonth(e.target.value)}
                        />
                        <CardFormInput
                            error={dateError ? "hsl(0, 100%, 66%)" : "rgb(221,221,221)"}
                            name='year'
                            type="text"
                            placeholder='YY'
                            value={year}
                            minLength='2'
                            maxLength='2'
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </DateContainer>
                <Error>{dateError}</Error>
                </CardDateContainer>
                <CardCVCContainer>
                <CardFormLabel htmlFor='cvc'>CVC</CardFormLabel>
                <CardFormInput
                        error={cvcError ? "hsl(0, 100%, 66%)" : "rgb(221,221,221)"}
                        name='cvc'
                        type="text"
                        placeholder='e.g. 123'
                        value={cvc}
                        maxLength='3'
                        onChange={(e) => setCvc(e.target.value)}
                    />
                <Error>{cvcError}</Error>
                </CardCVCContainer>
            </CardDateCVCContainer>
            <FormButton type='submit'>Confirm</FormButton>
        </CardForm>
    </CardFormContainer>
   )}
}

export default Form;

const CardFormContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    font-size: 18px;
    position: absolute;
    top: 28%;
    left: 53%;
    width: 380px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
        position: fixed;
        left: 2%;
        top: 40%;
        button {
        height: 50px;
     }
`;

const CardForm = styled.form`
    display: flex;
    flex-direction: column;
`; 
const CardFormInput = styled.input`
    font-family: 'Space Grotesk', sans-serif;
    border: 2px solid rgb(221,221,221);
    border-color: ${props => props.error};
    height: 30px;
    border-radius: 5px;	
    padding-left: 10px;
    font-weight: 700;

    &::placeholder {
        color: rgb(221,221,221);
    }

    &:focus {
        outline: none;
        border: 2px solid rgb(99,3,152);
        transition: 0.3s;
    }
`;
const CardFormLabel = styled.label`
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
`;

const CardDateCVCContainer = styled.div`
    display: flex;
`;
const CardDateContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const FormButton = styled.button`
    font-family: 'Space Grotesk', sans-serif;
    height: 40px;
    width: 100%;
    background-color: #000;    
    color: #fff;
    border-radius: 7px;
    cursor: pointer;

    @media screen and (max-width: 500px) {
        font-size: 18px;
     }
`;
const DateContainer = styled.div`
    display: flex;

    input{width: 60px;}

    input:nth-child(2){margin-left: 10px;}
`;
const CardCVCContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`;

const Error = styled.p`
    color: hsl(0, 100%, 66%);
    font-size: 12px;
    width: 100%;
    height: 20px;
    margin-top: 5px;
    margin-bottom: 10px;
    font-weight: bold;
`;

const SucessIcon = styled.img`
    width: 55px;
    height: 55px;
    margin-bottom: 45px;

    @media screen and (max-width: 500px) {
        width: 90px;
        height: 90px;
     }
`;

const SucessTittle = styled.h1`
    font-size: 22px;
    margin-bottom: 20px;
    letter-spacing: 2px;
    word-spacing: 5px;

    @media screen and (max-width: 500px) {
        font-size: 30px;
     }
`;

const SucessText = styled.p`
    color: rgb(157,155,157);
    font-size: 14px;
    margin-bottom: 45px;
    letter-spacing: 1.5px;

    @media screen and (max-width: 500px) {
        font-size: 18px;
     }
`;