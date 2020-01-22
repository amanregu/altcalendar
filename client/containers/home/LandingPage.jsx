/* eslint-disable no-unused-expressions */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import NavBar from '../../components/NavBar';
import CalendarImage from '../../../src/assets/calendar.png';

const LandingPage = () => (
  <div className="container">
    <NavBar />
    <div className="website-description">
      <div className="info-container">
        <header>
          <h1>AltCalendar</h1>
        </header>
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          molestiae a expedita illo neque qui sequi, dolores, ad voluptas
          reprehenderit eveniet quam officiis minima in quibusdam nemo rem
          repudiandae minus.
        </p>
      </div>
      <div className="image-container">
        <img src={CalendarImage} alt="Calender"></img>
      </div>
    </div>
  </div>
);

export default LandingPage;
