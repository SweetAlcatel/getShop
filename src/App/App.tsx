import React, { useState } from 'react';
import './App.css';
import { Video } from '../Video/Video';
import { Banner } from '../Banner/Banner';
import { TelephoneNumberWindow } from '../TelephoneNumberWindow/TelephoneNumberWindow';

export const App = () => {

    const [isShow, setShow] = useState(false);

    const [isClicked, setClick] = useState(false);

    return (
        <main>
            <Video setState={setShow}/>
            {isShow && <Banner setClick={setClick}/>}
            {isClicked && <TelephoneNumberWindow />}
        </main>
    );

};
