import React, { useState } from 'react';
import './PricingPage.css'; // Assuming you have a CSS file for styling
import { FaCheck, FaNetworkWired, FaSms, FaUser, FaVoicemail, FaWatchmanMonitoring } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { MdMarkEmailUnread } from 'react-icons/md';

const PricingPage = () => {

   // State to track the selected billing option
   const [billingOption, setBillingOption] = useState('monthly');

   // Function to handle click on "Monthly" button
   const handleMonthlyClick = () => {
     setBillingOption('monthly');
   };
 
   // Function to handle click on "Annually" button
   const handleAnnuallyClick = () => {
     setBillingOption('annually');
   };
 
  return (
    <div className="pricing">
      <div className="btn-container">
        <motion.button
           whileTap={{ scale: 1.1,}} className={billingOption === 'monthly' ? 'green-bg' : ''}
          onClick={handleMonthlyClick} >Monthly</motion.button>
        <motion.button whileTap={{ scale: 1.1,}} className={billingOption === 'annually' ? 'green-bg' : ''}
          onClick={handleAnnuallyClick} >Annually</motion.button>
      </div>
     <div className="pricing-container">
      
      {/* Pricing card for Free plan */}
      <motion.div className="pricing-card free">
        <h2>Free</h2>
        
        <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.05 }}
        >{billingOption==="monthly"?"$0/mo":"$0/yr"}</motion.span>
        <p>Basic features</p>
        <ul>
          <div className="pricing-circle"></div>
          <li><FaWatchmanMonitoring /> 10 monitors</li>
          <li><FaCheck /> 5-minute checks</li>
          <li><MdMarkEmailUnread /> Email notifications</li>
          <li><FaSms />Limited SMS notifications </li>
        </ul>
        <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 1.05,rotate:5 }} className='btn'>Sign Up</motion.button>
      </motion.div>

      {/* Pricing card for Team plan */}
      <div className="pricing-card team">
        <h2>Team</h2>
        
        <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.05}}>{billingOption==="monthly"?"$99/mo":"$999/yr"}</motion.span>
        <p>Advanced features</p>
        <ul>
        <div className="pricing-circle"></div>
          <li><FaWatchmanMonitoring /> 50 monitors</li>
          <li><FaCheck /> 1-minute checks</li>
          <li><FaVoicemail /> Email & SMS notifications</li>
          <li><FaSms /> Customizable alerting</li>
        </ul>
        
        <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 1.05,rotate:5  }} className='btn'>Sign Up</motion.button>
      </div>

      {/* Pricing card for Enterprise plan */}
      <div className="pricing-card enterprise">
        <h2>Enterprise</h2>
        
        <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.05 }}>Contact us</motion.span>
        <p>Premium features</p>
        <ul>
        <div className="pricing-circle"></div>
          <li><FaWatchmanMonitoring /> Unlimited monitors</li>
          <li><FaCheck /> 30-second checks</li>
          <li><FaUser /> Multi-user support</li>
          <li><FaNetworkWired /> API access</li>
        </ul>
        
        <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 1.05,rotate:5  }} className='btn'>Contact</motion.button>
      </div>
    </div>
    </div>
    );
}

export default PricingPage;
