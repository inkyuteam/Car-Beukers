import React from 'react'
import about from '../../assets/about.png'
import "./About.css"

export const About = () => {
  return (
    <div className="about">
      <div className="description">
        <div className='track'>
          <div className='title'>About.</div>
          <div className='sub-title'>Vol gas naar je droom auto</div>
          <div className='text'>
            Auto's zijn mijn ding. Wat startte als een hobby, explodeert nu!
            Mijn garage staat voller dan ooit en ik voel dat het tijd is om te
            schakelen. Niet omdat ik deze prachtige machines niet waardeer, maar
            om ruimte te creëren voor nieuwe krachtpatsers. Ik zet nu de stap om
            mijn eigen autobedrijf te lanceren, zodat ik vol gas mijn passie kan
            volgen en tegelijkertijd andere autoliefhebbers een unieke ervaring
            kan bieden!
          </div>
        </div>
      </div>
      <div className="image">
        <img src={about} alt="" />
      </div>
    </div>
  );
}
