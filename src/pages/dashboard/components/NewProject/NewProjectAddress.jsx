
import React from "react";
import Map from "../../../../components/map";







const NewProjectAddress = ({ address, setAddress, location, setLocation }) => {


    const [searchQuery, setSearchQuery] = React.useState('')

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


    const handleSearch = async () => {
        const geocodedLocation = await searchAddress(searchQuery);
        if (geocodedLocation) {
            setLocation(geocodedLocation);
            setAddress(searchQuery);  // Set the address to the searched query
            console.log("Updated Location:", geocodedLocation);
            console.log("Updated Address:", searchQuery);
        } else {
            console.log("No location found for the address.");
        }
    };


    const handleAddressSubmit = () => {
        setDisplayedAddress(typedAddress);
        // Update location based on typedAddress if necessary
    };

    return (
        <>
            <div className="column-new-project-address">
                <div className="dashboard-item location">

                    <Map location={location} address={address} />

                </div>

                <div className="address-input-container">
                    <input
                        type="text" className="address-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Enter address"
                    />
                    <button onClick={handleSearch} className="address-button">Search</button>
                </div>
            </div>

        </>
    )
}

export default NewProjectAddress;


