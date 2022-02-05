import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import './TelephoneNumberWindow.css';

interface TelephoneNumberWindowProps {
    setClick: (prop: boolean) => void
}

export const TelephoneNumberWindow = ({ setClick} : TelephoneNumberWindowProps) => {

    const symbols: Array<string> = ['+', '7', '-', '(', '#', '#', '#', ')', '-', '#', '#', '#', '-', '#', '#', '-', '#', '#'];

    let telephoneNumber = symbols.join('');

    const [state, setState] = useState(telephoneNumber);

    const numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    const writeNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const subArray1 = state.slice(0);
        const index = subArray1.indexOf('#');
        const subArray2 = [...subArray1]
        subArray2[index] = String(e.currentTarget.textContent)
        telephoneNumber = subArray2.join('')
        setState(telephoneNumber)
    };

    return (
        <div>
            <div className='container-telephone'>
                <h2>Введите ваш номер телефона</h2>
                <form>
                    <NumberFormat format={state} allowEmptyFormatting mask="_"/>
                </form>
                <span>и с Вами свяжется наш менеждер для дальнейшей консультации</span>
                <ul>
                    {
                        numbers.map((number: number) => {
                            return <li key={number}><button onClick={(e: any) => writeNumber(e)}>{number}</button></li>
                        })
                    }
                    <li><button onClick={() => setState(symbols.join(''))}>Стереть</button></li>
                </ul>
                <div className='agree'>
                    <input type='checkbox'/>
                    <span>Согласие на обработку персональных данных</span>
                </div>
                <button className='confirm'>Подтвердить номер</button>
            </div>
            <div className='reset' onClick={() => setClick(false)}></div>
        </div>
    );   
};