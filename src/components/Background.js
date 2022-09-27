import styled from 'styled-components';
import backgroundDesktop from '../assets/images/bg-main-desktop.png';
import backgroundMobile from '../assets/images/bg-main-mobile.png';

function Background(props) {
    return (
        <BackgroundContainer>
            <BackgroundImage />
            {props.children}
        </BackgroundContainer>
    );
}

export default Background;

const BackgroundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    min-height: 300px;
`;

const BackgroundImage = styled.div`
    width: 35%;
    height: 100%;
    background-image: url(${backgroundDesktop});
    background-repeat: no-repeat;

    @media screen and (max-width: 500px) {
        background-image: url(${backgroundMobile});
        background-size: 100%;
        height: 27%;
        width: 100%;
        align-items: center;
        }
`;