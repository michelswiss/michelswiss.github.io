import React from 'react';
import './styles/HomeworkChildGridFormStyles.css';

export default function WrapperMain({children}) {
    return (
        <div className={'app'}>
            <div className={'wrapper'}>
                {children}
            </div>
        </div>
    )
}