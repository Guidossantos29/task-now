import React from 'react'
import PrimaryButton from './PrimaryButton'

function CustomForm() {
    return (
        <form className='flex rounded-lg flex-col items-center w-[500px] h-[300px] shadow-2xl'>
            <div className='flex flex-col items-center'>
                <span className='text-3xl mb-4'>Seja bem vindo!</span>

                <div className='flex flex-col gap-1 justify-center items-center'>
                    <div className=' w-full flex justify-between items-center gap-2 '>
                        <span className='text-lg'>Email:</span>
                        <input
                            placeholder='exemplo@exemplo.com'
                            className='p-1 border rounded-lg'
                            type="text" />
                    </div>

                    <div className='flex w-full justify-between gap-2' >
                        <span className='text-lg'>Senha:</span>
                        <input
                        placeholder='digite sua senha'
                            className='p-1 border rounded-lg'
                            type="password" />
                    </div>

                </div>

                <div className='w-full flex mt-2'>
                    <PrimaryButton
                        className="w-full mx-20  "
                        backgroundColor='lightblue'
                        title={'Login'} />
                </div>
                
            </div>




        </form>
    )
}

export default CustomForm
