import React, { useState } from 'react';
import './App.css';
import { Video } from '../Video/Video';
import { Banner } from '../Banner/Banner';

export const App = () => {

    const [isShow, setShow] = useState(false);

    console.log(isShow);

    return (
        <main>
            <Video setState={setShow}/>
            {isShow && <Banner />}
        </main>
    );

};
