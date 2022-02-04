import React, { useState, useRef } from 'react';
import NumberFormat from 'react-number-format';
import './TelephoneNumberWindow.css';

export const TelephoneNumberWindow = () => {

    const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <div className='container-telephone'>
            <h2>Введите ваш номер телефона</h2>
            <NumberFormat format="+7 (###) ###-####" allowEmptyFormatting mask="_"/>
            <span>и с Вами свяжется наш менеждер для дальнейшей консультации</span>
            <ul>
                {
                    numbers.map((number: number) => {
                        return <li key={number}><button>{number}</button></li>
                    })
                }
            </ul>
            <div className='agree'>
                <input type='checkbox'/>
                <span>Согласие на обработку персональных данных</span>
            </div>
            <button className='confirm'>Подтвердить номер</button>
        </div>
    );   
};