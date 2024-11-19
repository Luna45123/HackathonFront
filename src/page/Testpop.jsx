import React, { useState } from 'react';
import Popup from './Popup'; // Import the Popup component.

const Testpop = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div>
            <button onClick={openPopup}>Open Popup</button>

            <Popup show={isPopupOpen} onClose={closePopup}>
                <h2>Popup Content</h2>
                <p>This is a simple popup in React.</p>
                <button onClick={closePopup}>Close</button>
            </Popup>
        </div>
    );
};

export default Testpop;
