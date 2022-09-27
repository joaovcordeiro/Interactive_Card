import styled from 'styled-components';
import backCardDesktop from '../assets/images/bg-card-back.png';

function BackCard({cvc}) {
    return (
        <BackCardContainer>
            <CardCVC>{cvc ? cvc : '000'}</CardCVC>
        </BackCardContainer>
    );
};

export default BackCard;

const BackCardContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');
    font-family: 'Space Grotesk', sans-serif;
    position: absolute;
    background-image: url(${backCardDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    width: 420px;
    height: 230px;
    left: 17%;
    top: 54%;
    border-radius: 5px;
    color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    @media screen and (max-width: 500px) {
       top: -20px;
       left: 20px;
       scale: 0.55;
    }
`
const CardCVC = styled.p`
    position: absolute;
    right: 12%;
    top: 45%;
`;
