import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import decoration1 from '../../assets/decoration1.png'
import party_props from '../../assets/party_props.png'
import decoration2 from '../../assets/decoration2.png'
import party_props2 from '../../assets/party_props2.png'
import flower_bouquet from '../../assets/flower_bouquet.png'
import flower_bouquet2 from '../../assets/flower_bouquet2.png'
import cake1 from '../../assets/cake1.png'
import cake2 from '../../assets/cake2.png'
import './Services.css'
import {Link} from 'react-router-dom'
const Services = () => {
  const services = [
    { name: "Decorations", price: 699, bgImage: decoration1, image: decoration2 },
    { name: "Party Props", price: 499, bgImage: party_props, image: party_props2 },
    { name:"FlowerBouquets", price:499, bgImage:flower_bouquet, image: flower_bouquet2},
    {name: "Cake", price:599, bgImage:cake1, image:cake2},
    // Add more services as needed
  ];
  return (
    <div className='services'>
      <div className="container">
        <div className="service-header">
          <div className="service-content">
              <h3>Services</h3>
              <h1>Get A New Experience With <br /> Party Mowa Services</h1>
          </div>
          <div className="service-buttons">
            <button className='arrow-btn'><FaArrowLeft /><span>Prev</span></button>
            <button className='arrow-btn'><FaArrowRight/><span>Next</span></button>
          </div>
        </div>
        <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-list-box" style={{ backgroundImage: `url(${service.bgImage})` }}>
            <div className="overlay"></div>
            <div className="service-bg-image">
            <img src={service.image} alt={service.name} />
            </div>
            <div className="service-list-content">
              <h3 className='service-name'><Link to='#'>{service.name}</Link></h3>
              <span className='service-price'>Starts From <span>{service.price}</span></span>
            </div>
            {/* <Link to='#' className='service-btn'>Read More <FaArrowRight /> </Link> */}
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Services
