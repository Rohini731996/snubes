
import { connect } from 'react-redux';
import { setCard } from './actions/card';
import PropTypes from 'prop-types';
import { useState, Fragment } from 'react';
import './App.css';
import Navbar from './components/navbar';
import styled from "styled-components";


const Hero = styled.div`
  width: 400px;
  height: 600px;
  background-image: url(${props => props.desktopimg}); no-repeat;
  background-size: cover;
  @media screen and (max-width: 1024px) {
    width: 300px;
    height: 500px;
    background-image: url(${props => props.tabletimg}); no-repeat;
  }
  @media screen and (max-width: 640px) {
    width: 200px;
    height: 400px;
    background-image: url(${props => props.mobileimg}); no-repeat;
  }
`;
function App({ setCard, cards }) {
    const [cardRandomNum, setCardRandomNum] = useState(1);
    const [card] = useState(['spade', 'heart', 'diamond', 'club']);
    const [cardTypeOutput, setCardTypeOutput] = useState('spade');

    const btnHandleClick = () => {
        // Change the code below to Math.floor(Math.random() * 13 + 1) if you want to get cards from 1 - 13 which is the full deck. 52 cards in total.
        setCardRandomNum(Math.floor(Math.random() * 3 + 1));
        console.log(cardRandomNum);

        const cardType = [Math.floor(Math.random() * card.length)];

        setCardTypeOutput(card[cardType]);
        console.log(cardTypeOutput);

        setCard(cardRandomNum, cardTypeOutput);
        console.log(cards);
    };



    return (
        <Fragment>
            <main>
                {/* <Navbar/> */}
                <section className="container">
                    <div>
                        <Hero
                            desktopimg={bg3x}
                            tabletimg={bg3x}
                            mobileimg={bg2x}
                        />
                    </div>

                </section>
            </main>
        </Fragment>
    );
}

App.propTypes = {
    setCard: PropTypes.func.isRequired,
    cards: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    cards: state.card,
});

export default connect(mapStateToProps, { setCard })(App);