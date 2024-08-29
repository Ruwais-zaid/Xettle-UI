import React, { useState } from 'react';
import Register from '../Pages/Register';
import Otp from '../Pages/Otp';

function RegistrationFlow() {
    const [mobile, setMobile] = useState('');

    const handleRegistrationSuccess = (mobile) => {
        console.log(mobile);
        setMobile(mobile);
    };

    return (
        <div>
            <Register onSuccess={handleRegistrationSuccess} />
            <Otp mobile={mobile} />
        </div>
    );
}

export default RegistrationFlow;
