/* 
  File Name: Services.js
  Student Name: Daniil Konishchev
  Student ID: 300735304
  Date: September 29, 2024
*/


import React from 'react';
import './services.css';

import webImage from '../assets/web.jpg';
import paralegalImage from '../assets/paralegal.jpg';
import appImage from '../assets/app.jpg';

const Services = () => {
  return (
    <div className="services-container">
      {/* Section 1: Building Websites */}
      <div className="service-section">
        <h2>Creating Websites For Your Everyday Business Needs</h2>
        <img
          src={webImage}
          alt="Building Websites"
          className="service-image"
        />
        <p>
          I create modern, responsive websites tailored to your business needs. Whether you're looking for an
          e-commerce platform, a personal portfolio, or a corporate website, we've got you covered.
        </p>
      </div>

      {/* Section 2: Paralegal Matters */}
      <div className="service-section">
        <h2>Paralegal Matters</h2>
        <img
          src={paralegalImage}
          alt="Paralegal Matters"
          className="service-image"
        />
        <p>
          My expert paralegal services ensure that your legal needs are met with professionalism and efficiency. 
         I can handle a wide range of legal support, including document preparation, research, and court filings. I mainly focus on Landlord and Tenant Matters.
        </p>
      </div>

      {/* Section 3: Mobile App Development */}
      <div className="service-section">
        <h2>Mobile App Development</h2>
        <img
          src={appImage}
          alt="Mobile App Development"
          className="service-image"
        />
        <p>
          My team specializes in developing mobile applications for both Android and iOS platforms. Whether it's a business app 
          or a fun, interactive game, our development team will bring your idea to life with sweet designs and user-friendly features.
        </p>
      </div>
    </div>
  );
};

export default Services;



{/* Service 1 Building Website: https://medium.com/@theymakedesign/web-app-design-examples-vol-233-946b304e8b11*/}
{/* Service 2 Paralegal: https://www.forbes.com/advisor/education/law/paralegal-vs-lawyer*/ }
{/* Service 3 Mobile App Development: https://enterpriseviewpoint.com/mobile-application-development-done/*/ }
