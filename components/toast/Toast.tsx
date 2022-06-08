import React from 'react';
import style from './Toast.module.scss';
export default function Toast({list}:{list:any[]}) {
    
    return (
        <div className={style.toastContainer}>
            {
                list.map((item:any) => (
                    <div className={style.toast}>
                        <h3>This is title</h3>
                        <p className=''>This is message</p>
                    </div>
                ))
            }
        </div>
    )
}
