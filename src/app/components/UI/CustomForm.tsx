import React from 'react'
import PrimaryButton from './PrimaryButton'

function CustomForm() {
    return (
        <form className='border flex flex-col w-[500px] h-[300px]'>
            <div className='flex flex-col items-center'>
                <span className='text-3xl'>Seja bem vindo!</span>
                <div>
                    <span className='text-lg'>Email:</span>
                    <input className='text-lg' type="text" />
                </div>
                <div className='text-lg' >
                    <span>Senha:</span>
                    <input type="password" />
                </div>
                <div className='w-full border flex'>
                    <PrimaryButton
                        className="w-full"
                        backgroundColor='lightblue'
                        title={'Login'} />
                </div>
            </div>




        </form>
    )
}

export default CustomForm
