import React, { useState } from 'react'
import "./Integration.css"
import { MdOutlineAttachEmail } from "react-icons/md";
import Eyes from '../../components/Eyes/Eyes';
import { motion,useScroll } from 'framer-motion';


const Intergration = () => {

    const { scrollYProgress } = useScroll();
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Update cursor position on mouse move
    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className='integration' >
            <div className="banner"  onMouseMove={handleMouseMove}>
            <div className="luminous-circle" style={{ left: cursorPosition.x, top: cursorPosition.y }} />
                <h1>Downtime happens. <br /><span className='green-font'>Get notified!</span> </h1>
                <p>Everyone knows it happens. But it’s important to realize before customers do.</p>
            </div>
           
            <div className="personal-channels">
                <h1><span className='green-font'>Personal</span> notification channels<span className='green-font'>.</span></h1>
                <center>
                <div className="card-grid">
                    <div className="card">
                    <img src="https://uptimerobot.com/assets/images/integration-email-dark.svg" alt="" />
                      <p className='card-desc'>E-mail is a basic form of outages notifications. Get alerted!</p>
                        <p>Email</p>
                    </div>
                    <div className="card">
                       <img src="https://uptimerobot.com/assets/images/integration-sms-dark.svg" alt="" />
                       <p className='card-desc'>Get alerted instantly by SMS, even when you are offline!</p>
                        <p>SMS</p>
                    </div>
                    <div className="card">
                         <img src="https://uptimerobot.com/assets/images/integration-voice-dark.svg" alt="" />           
                         <p className='card-desc'>Get an automatic voice call alert whenever your website is down.</p>
                          <p>Voice</p>
                    </div>
                    <div className="card">
                        <img src="https://uptimerobot.com/assets/images/integration-sms-dark.svg" alt="" />
                        <p className='card-desc'>Using free Email to SMS gateway you receive alerts to your mobile phone number via SMS.</p>
                        <p>Email to SMS</p>
                    </div>
                    <div className="card">
                        <img src="https://uptimerobot.com/assets/images/integration-push-dark.svg" alt="" />
                        <p className='card-desc'>
                        Download our free iOS / Android app to get notifications to your phone instantly!
                        </p>
                        <p>Mobile app push</p>
                    </div>
                </div>
                </center>
                <div className="integration-footer">
                    <h1>Stay <span className='green-font'>notified</span> on the go.</h1>
                    <p>Don't forget to download our mobile app for your Android or iOS.</p>
                    <div className="download-container">
                        <img src="https://uptimerobot.com/assets/images/google-playstore-badge.svg" alt="" />
                        <img src="https://uptimerobot.com/assets/images/appstore-badge.svg" alt="" />
                    </div>
                </div>
            </div>
             
            <motion.div style={{ scaleY: scrollYProgress }}className="personal-channels">
                <h1>3rd party <span className='green-font'>integrations.</span></h1>
                <center>
                    <div className="card-container">
                <div className="card-grid">
                    <div className="card">
                    <img src="https://uptimerobot.com/assets/images/integration-slack.svg" alt="" />
                      <p className='card-desc'>Slack messages are a great way to inform the entire team of a downtime.</p>
                        <p>Slack</p>
                    </div>
                    <div className="card">
                       <img src="https://uptimerobot.com/assets/images/integration-zapier.svg" alt="" />
                       <p className='card-desc'>Integrate your Zapier account to get alerted right away.</p>
                        <p>Zapier</p>
                    </div>
                    <div className="card">
                         <img src="https://uptimerobot.com/assets/images/integration-telegram.svg" alt="" />           
                         <p className='card-desc'>Send up & down events and auto-resolve your incidents in PagerDuty.</p>
                          <p>Telegram</p>
                    </div>
                    <div className="card">
                        <img src="https://uptimerobot.com/assets/images/integration-webhooks.svg" alt="" />
                        <p className='card-desc'>Just set up a Splunk URL to notify and you are good to go!</p>
                        <p>Webhooks</p>
                    </div>
                  
                </div>
                <div className="card-grid">
                    <div className="card">
                    <img src="https://uptimerobot.com/assets/images/integration-mattermost.svg" alt="" />
                      <p className='card-desc'>For advanced alerting you can setup webhooks to your own system or app.</p>
                        <p>Mattermost</p>
                    </div>
                    <div className="card">
                       <img src="https://uptimerobot.com/assets/images/integration-discord.svg" alt="" />
                       <p className='card-desc'>Get important monitor status updates in your Discord messages.</p>
                        <p>Discord</p>
                    </div>
                    <div className="card">
                         <img src="https://uptimerobot.com/assets/images/integration-pushbullet.svg" alt="" />           
                         <p className='card-desc'>Keep the whole team informed with Mattermost notifications.</p>
                          <p>Pushbullet</p>
                    </div>
                    <div className="card">
                        <img src="https://uptimerobot.com/assets/images/integration-microsoft-teams.svg" alt="" />
                        <p className='card-desc'>Get instant alerts via mobile push notifications in Pushbullet Android app.</p>
                        <p>Microsoft Teams</p>
                    </div>
                   
                </div>
                <div className="card-grid">
                    <div className="card">
                    <img src="https://uptimerobot.com/assets/images/integration-pushover.svg" alt="" />
                      <p className='card-desc'>Get notifications into the Google Chat. Just copy the room URL to UptimeRobot.</p>
                        <p>Pushover</p>
                    </div>
                    <div className="card">
                       <img src="https://uptimerobot.com/assets/images/integration-splunk.svg" alt="" />
                       <p className='card-desc'>Get instant alerts via mobile push notifications in Pushover app.</p>
                        <p>Splunk</p>
                    </div>
                    <div className="card">
                        <img src="https://uptimerobot.com/assets/images/integration-pagerduty.png" alt="" />
                        <p className='card-desc'>
                        Telegram messages are a great way how to stay alerted.
                        </p>
                        <p>Pagerduty</p>
                    </div>
                    <div className="card">
                        <img src="https://uptimerobot.com/assets/images/integration-hangouts.svg" alt="" />
                        <p className='card-desc'>
                        Get notifications inside your MS Teams app to alert everyone in the group.
                        </p>
                        <p>Hangouts</p>
                    </div>
                </div>
                </div>
                </center>
                
            </motion.div>
            
        </div>
    )
}

export default Intergration