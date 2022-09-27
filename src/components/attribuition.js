import styled from 'styled-components';


function Attribuition() {
    return(
        <AttribuitionContainer>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/joaovcordeiro">João Araujo</a>.
        </AttribuitionContainer>
    );
}

export default Attribuition;

const AttribuitionContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: calc(50% - translateX(-50%));
    color: rgb(157,155,157);

`;