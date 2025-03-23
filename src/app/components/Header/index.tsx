"use client"

import PrimaryButton from '@/app/components/UI/PrimaryButton'
import React from 'react'
import { useRouter } from 'next/navigation'

interface Headerprops {
    showLogin: boolean
    showRegister: boolean
}

const Header: React.FC<Headerprops> = ({ showLogin, showRegister }) => {

    const router = useRouter();

    return (
        <>
            <div className='flex items-center justify-between my-3 shadow-xl'>
                <div className='mx-10 mb-3 '>
                    <span>Task<strong>Now</strong></span>
                </div>

                <div className='flex items-center gap-2 mx-10 rounded-sm mb-3'>
                    {showLogin && (
                        <PrimaryButton
                            title={'Login'}
                            onClick={() => router.push("/login")}
                        />

                    )}
                    {showRegister && (
                        <PrimaryButton
                            title={'registrar'}
                            onClick={() => router.push("/register")}
                        />
                    )}

                </div>

            </div>
        </>

    )
}



export default Header
