import React from 'react'

function Header() {
    return (
        <>
            <div className='flex items-center justify-between my-3 shadow-xl'>
                <div className='mx-10 mb-3 '>
                    <span>Task<strong>Now</strong></span>

                </div>
                <div className='flex items-center gap-2 mx-10  mb-3'>
                    <button>Registrar</button>
                    <button>Login</button>
                </div>

            </div>
        </>

    )
}

export default Header
