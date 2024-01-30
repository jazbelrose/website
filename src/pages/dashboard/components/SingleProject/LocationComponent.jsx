import React, { useState, useEffect } from 'react';
import Modal from "react-modal";
import Map from "../../../../components/map";



const LocationComponent = ({ activeProject }) => {

    const [localActiveProject, setLocalActiveProject] = useState(activeProject || {});
    const [selectedAddress, setSelectedAddress] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
    const [buttonText, setButtonText] = useState('Search');
    const [location, setLocation] = useState(activeProject.location || {});
    const [address, setAddress] = useState(activeProject.address || '');

   const handleInputChange = (e) => {
    setSearchQuery(e.target.value);

    if (e.target.value.trim() === '') {
        
        setButtonText('Search');

        setLocation(activeProject.location || {});
        setAddress(activeProject.address || '');
    } else {
        // If the input field is not empty, set the button text to "Save"
        setButtonText('Save');
    }
};
 
   

    const searchAddress = async (address) => {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.length > 0) {
                return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
            }
            return null;
        } catch (error) {
            console.error("Error during address search:", error);
            return null;
        }
    };

    const handleUpdateAddress = async (e) => {
        e.preventDefault();
        const geocodedLocation = await searchAddress(searchQuery);
        
        if (geocodedLocation) {
            setSelectedAddress(searchQuery); 
            setLocation(geocodedLocation);
            setAddress(searchQuery);
            
            console.log("Updated Location:", geocodedLocation);
            console.log("Updated Address:", searchQuery);
            await updateAddressToAPI(searchQuery); 

            setButtonText('Saved');
            setTimeout(() => {
                setButtonText('Search');
            }, 2000);

        } else {
            console.log("No location found for the address.");
        }
    };




    const updateAddressToAPI = async () => {
        const apiUrl = `https://didaoiqxl5.execute-api.us-west-1.amazonaws.com/default/editProject?projectId=${activeProject.projectId}`;
        const payload = {
            address: selectedAddress
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                console.log('Address updated successfully');
                const updatedProject = { ...activeProject, address: selectedAddress };

            } else {
                console.error('Failed to update Address');
            }
        } catch (error) {
            console.error('Error updating address:', error);
        }

      
    };





    return (
        <>
            <div className="column-5">
                <div className="dashboard-item location">

                    <Map location={location} address={address} />

                </div>

                <div className="address-input-container">
                <input
                        type="text" className="address-input"
                        value={searchQuery}
                        onChange={handleInputChange}
                        placeholder="Enter address"
                    />
                     <button onClick={handleUpdateAddress} className="address-button">
                    {buttonText}
                </button>
                </div>
            </div>

        </>
    )
}

export default LocationComponent;