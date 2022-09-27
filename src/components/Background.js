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
`;

const BackgroundImage = styled.div`
    top: 0;
    left: 0;
    width: 35%;
    height: 100%;
    background-image: url(${backgroundDesktop});
    background-repeat: no-repeat;

    @media screen and (max-width: 500px) {
        background-image: url(${backgroundMobile});
        background-size: 100%;
        width: 100%;
        }
`;