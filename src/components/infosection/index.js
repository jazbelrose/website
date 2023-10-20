import React from 'react';
import "./style.css";
import { Introtext } from '../introtext';
import { ScrambleButton } from '../scramblebutton';
import { ReactComponent as Snap } from "../../assets/svg/snap.svg";





const handleNewsletterSignup = async (e) => {
    e.preventDefault();
    
    const email = e.target.elements.email.value;

    if (!email) {
        console.error("Email is required!");
        return;
    }

    const apiKey = process.env.REACT_APP_MAILCHIMP_API_KEY;
    const listId = "04705a192b";
    const dataCenter = apiKey.split('-')[1]; // Extracted from the API key
    const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members`;

    const userData = {
        email_address: email,
        status: "subscribed",
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `apikey ${apiKey}`,
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" // Add this header for local development
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Failed with status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Subscription successful", data);
    } catch (error) {
        console.error("Newsletter signup error:", error);
    }
};








export const InfoSection = () => {
    return (
        <>
            <div className="info-header">
                <h2 className="info-title">Let's Talk</h2>
            </div>

            <div className="info-section">

                {/* First Column */}
                <div className="info-column first-column">
    <div className="content-container">
        <div className="info-club">
            <h3 className="club-title">JOIN THE CLUB</h3>
        </div>
        <p className="club-description">
            READY TO PITCH A GAME-CHANGER OR TAKE OVER THE WORLD? 
            WE'RE THE JAM TO YOUR TOAST!
        </p>
        <form className="newsletter" onSubmit={handleNewsletterSignup}>
        <input className="email-input" type="email" name="email" placeholder="Your Email Address" />

  <ScrambleButton text="Subscribe" className="touch-btn-subscribe" submitMode={true} />
</form>

        <div className="consent-container">
            <input type="checkbox" id="data-consent" />
            <label htmlFor="data-consent">
                CONSENT TO THE PROCESSING OF YOUR PERSONAL DATA FOR MARKETING AND PROFILING PURPOSES
            </label>
        </div>
    </div>
</div>
           {/* Second Column */}
<div className="info-column second-column">

    <Introtext />
    <ScrambleButton text="Get in Touch → " to="/contact" className="touch-btn" />

        
</div>

            {/* Third Column */}
<div className="info-column third-column">
    <div className="content-container">
    <div className="info-address">
    <p className="address-text">
        OFFICE
        S BROADWAY
        DOWNTOWN
        LOS ANGELES
        PARIS FRANCE
        310.002.4217
    </p>
    <Snap className="address-svg" />
</div>
        <div className="info-contact">
            <p className="contact-phone">
           
            </p>
        </div>
    </div>
</div>





            </div>
        </>
    );
};
