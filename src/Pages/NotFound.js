import React from 'react';
import notfound_img from '../Assets/Notfound.jpg'
import '../Styles/NotFound.css'

const NotFound = () => {
    return (
        <>
            <div className='text-center pt-5 pb-5'>
                <img className='notFound_img' src={notfound_img} alt='NotFound' />
            </div>
            <div className='mb-5'>
                <h2 className='text-center notfound-h2' style={{fontSize:"32px",fontWeight:700}}>We can’t find the page you’re<br/> looking for</h2>
            </div>


        </>
    )
}


export default NotFound;