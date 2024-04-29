import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { FaCog, FaChartLine, FaBars, FaTimes } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { motion, useScroll } from "framer-motion"
import { GiNinjaHeroicStance } from "react-icons/gi";

function Navbar({ setShowLogin }) {
  // const { scrollYProgress } = useScroll();

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
     <motion.nav
       initial={{ opacity: 0, y: -100 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 1 }}
       className="navbar">
        <a href='/' className="logo-container">
          <div className="logo"></div>  
           <h1>Web<GiNinjaHeroicStance color='#3BD771' size={28}/>Warden</h1>
          <span className='hire'>We are hiring</span>
        </a>
        <ul className="nav-menu">
          <li><a href="#">Monitoring</a>
            <ul className="sub-menu">
              <li>
                <div className="submenu-row">
                  <div className="submenu-item">
                    <div className="submenu-content">
                      <h3 >Reliable uptime monitoring.</h3>

                    </div>
                  </div>
                  <div className="submenu-item">
                    <FaCog className="submenu-icon" />
                    <div className="submenu-content">
                      <h3>Submenu 1</h3>
                      <p>Be the first to know that your website is down!</p>
                    </div>
                  </div>
                  <div className="submenu-item">
                    <FaCog className="submenu-icon" />
                    <div className="submenu-content">
                      <h3>Submenu 1</h3>
                      <p>Be the first to know that your website is down!</p>
                    </div>
                  </div>
                  <div className="submenu-item">
                    <FaCog className="submenu-icon" />
                    <div className="submenu-content">
                      <h3>Submenu 1</h3>
                      <p>Be the first to know that your website is down!</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="submenu-row">
                  <div className="submenu-item">
                    <FaChartLine className="submenu-icon" />
                    <div className="submenu-content">
                      <h3>Submenu 2</h3>
                      <p>Be the first to know that your website is down!</p>
                    </div>
                  </div>
                  <div className="submenu-item">
                    <FaChartLine className="submenu-icon" />
                    <div className="submenu-content">
                      <h3>Submenu 2</h3>
                      <p>Be the first to know that your website is down!</p>
                    </div>
                  </div>
                  <div className="submenu-item">
                    <FaChartLine className="submenu-icon" />
                    <div className="submenu-content">
                      <h3>Submenu 2</h3>
                      <p>Be the first to know that your website is down!</p>
                    </div>
                  </div>
                  <div className="submenu-item">
                    <FaChartLine className="submenu-icon" />
                    <div className="submenu-content">
                      <h3>Submenu 2</h3>
                      <p>Be the first to know that your website is down!</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

          </li>
          <li><Link to="integration">Integration</Link></li>
          <li><Link to="status">Status Page</Link></li>
          <li><Link to="pricing">Pricing</Link></li>
        </ul>
        <motion.div whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }} className="right-menu">

          <a onClick={() => setShowLogin(true)} className='green-bg'>Register</a>
        </motion.div>

        <div className="mobile">
          {!isOpen ? (
            <FaBars onClick={() => setIsOpen(true)} size={30} />
          ) : (
            <FaTimes onClick={() => setIsOpen(false)} size={30} />
          )}
        </div>

      </motion.nav>

      <nav className={`side-navbar ${isOpen ? 'open' : ''}`}>
        <ul style={{padding:"6vw"}}>
          {/* Side navbar links */}
         
           <ul className="monitor">
           <span> <b>Monitors</b> </span>
              <li href="http://">
                
                <img src="https://uptimerobot.com/assets/images/monitor-icons/dark/website-monitoring-dark.svg" alt="" />
                <div className="list-heading">Website Monitoring</div>
              </li>
              <li href="http://">
        
                <img src="https://uptimerobot.com/assets/images/monitor-icons/dark/cron-job-monitoring-dark.svg" alt="" />
                <div className="list-heading">Cron Job Monitoring</div>
              </li>
              <li href="http://">
                
                <img src="https://uptimerobot.com/assets/images/monitor-icons/dark/port-monitoring-dark.svg" alt="" />
                <div className="list-heading">Port Monitoring</div>
              </li>
              <li href="http://">
                
                <img src="https://uptimerobot.com/assets/images/monitor-icons/dark/keyword-monitoring-dark.svg" alt="" />
                <div className="list-heading">Keyword Monitoring</div>
              </li>
              <li href="http://">
                
              <img src="https://uptimerobot.com/assets/images/monitor-icons/dark/ping-monitoring-dark.svg" alt="" />
               <div className="list-heading">Ping Monitoring</div>
              </li>
              <li href="http://">
                
                <img src="https://uptimerobot.com/assets/images/monitor-icons/dark/ssl-monitoring-dark.svg" alt="" />
                <div className="list-heading">SSL Monitoring</div>
              </li>
              <li href="http://">
                <img src="https://uptimerobot.com/assets/images/monitor-icons/dark/domain-monitoring-dark.svg" alt="" />
                <div className="list-heading">Domain Monitoring</div>
              </li>
           </ul>
           <hr />

           
           {/* <div className="teams">
            <span>Teams</span>
            <ul>
              <li>Devops</li>
              <li>Developers</li>
              <li>Marketers</li>
              <li>Support</li>
            </ul>
           </div> */}

          {/* <li><Link to="monitoring">Monitoring</Link></li>
          <li><Link to="integration">Integration</Link></li>
          <li><Link to="status">Status Page</Link></li>
          <li><Link to="pricing">Pricing</Link></li> */}
        </ul>
        <motion.div style={{textAlign:"center",}}  whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }} >

          <a onClick={() => {setShowLogin(true); setIsOpen(false)}} className='green-bg btn'>Register</a>
        </motion.div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
