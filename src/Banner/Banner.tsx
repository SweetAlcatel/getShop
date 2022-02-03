import React from 'react';
import '../Banner/Banner.css';

export const Banner: React.FC = () => {

    return (
        <div className='banner'>
            <h1>Исполните мечту вашего Ван Дамма! Подарите ему два грузовика VOLVO</h1>
            <img alt='Тут куар-код'/>
            <span>Сканируйте QR-код или нажмите кнопку ОК</span>
            <button>ОК</button>
        </div>
    );
};