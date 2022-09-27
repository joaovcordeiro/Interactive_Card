import styled from 'styled-components';
import frontCardDesktop from '../assets/images/bg-card-front.png';
import cardLogo from '../assets/images/card-logo.svg';

function FrontCard(props) {
    const {name, cardNumber, year, month} = props;

    const formatedDate = formatCardDate(month, year);

    function formatCardDate(month, year) {
        const formatedMonth = (month.length < 2) ? `0${month}` : month ? month : '00';
        const formatedYear = (year.length < 2) ? `0${year}` : year ? year : '00';
        return `${formatedMonth}/${formatedYear}`;
    }

    function formatName(name) {
        if(name) return name.toUpperCase();
    }

    return (
        <FrontCardContainer>
            <CardLogo src={cardLogo} alt="card logo" />
            <CardName>{name ? formatName(name) : 'JANE APPLESEED' }</CardName>
            <CardNumber>{cardNumber ? cardNumber : '0000 0000 0000 0000'}</CardNumber>
            <CardDate>{formatedDate ? formatedDate : '00/00'}</CardDate>
        </FrontCardContainer>
    );
};

export default FrontCard;

const FrontCardContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');
    font-family: 'Space Grotesk', sans-serif;
    position: absolute;
    background-image: url(${frontCardDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    width: 420px;
    height: 230px;
    left: 11%;
    top: 17%;
    border-radius: 5px;
    color: #fff;
    z-index: 1;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media screen and (max-width: 500px) {
        top: 6.8%;
        left: -70px;
        scale: 0.6;
     }
`
const CardLogo = styled.img`
    position: absolute;
    left: 7%;
    top: 10%;
    width: 80px;
    height: 45px;
`;

const CardNumber = styled.p`
    position: absolute;
    left: 7%;
    top: 140px;
    font-size: 25px;
    letter-spacing: 2px;
    word-spacing: 10px;
`;
const CardName = styled.p`
    position: absolute;
    left: 7%;
    top: 82%;
    font-size: 14px;
    letter-spacing: 1px;
`;
const CardDate = styled.p`
    position: absolute;
    right: 7%;
    top: 82%;
    font-size: 14px;
    letter-spacing: 1px;
`;

