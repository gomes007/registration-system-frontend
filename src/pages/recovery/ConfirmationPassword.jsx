
import React, { useState } from 'react';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import './PasswordDemo.css';


const ConfirmPassword = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

    const header = <h6>Pick a password</h6>;
    const footer = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{lineHeight: '1.5'}}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <Password value={value1} onChange={(e) => setValue1(e.target.value)} feedback={false} />

                <h5>Password Meter</h5>
                <Password value={value2} onChange={(e) => setValue2(e.target.value)} />

                <h5>Show Password</h5>
                <Password value={value3} onChange={(e) => setValue3(e.target.value)} toggleMask />

                <h5>Templating</h5>
                <Password value={value4} onChange={(e) => setValue4(e.target.value)} header={header} footer={footer} />
            </div>
        </div>
    );
}


export {ConfirmPassword}