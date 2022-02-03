import React, { useState } from 'react';
import './App.css';
import { Video } from '../Video/Video';
import { Banner } from '../Banner/Banner';

export const App = () => {

    const [seconds, setSeconds] = useState(0);

    if(seconds >= 5) {
        return (
            <main>
                <Video setState={setSeconds}/>
                <Banner />
            </main>
        );

    };

    return (
        <main>
            <Video setState={setSeconds}/>
        </main>
    );

};
