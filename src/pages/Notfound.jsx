import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Notfound() {
    const navigate = useNavigate();

    const goback = () => {
        navigate('/');

    }


    return (
        <div>
            <div>
                Page not found
            </div>
            <div>
                <button onClick={goback}>
                    Go Back
                </button>
            </div>
        </div>
    )
}
