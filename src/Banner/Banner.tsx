import React from 'react';
import '../Banner/Banner.css';

interface BannerProps {
    setClick: (prop: boolean) => void
}

export const Banner = ({ setClick } : BannerProps) => {

    return (
        <div className='banner'>
            <h1>Исполните мечту вашего Ван Дамма! Подарите ему два грузовика VOLVO</h1>
            <img alt='Тут куар-код'/>
            <span>Сканируйте QR-код или нажмите кнопку ОК</span>
            <button onClick={() => setClick(true)}>ОК</button>
        </div>
    );
};