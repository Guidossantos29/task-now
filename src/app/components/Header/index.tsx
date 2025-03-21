"use client"

import PrimaryButton from '@/app/layout/PrimaryButton'
import React from 'react'
import { useRouter } from 'next/navigation'


function Header() {

    const router = useRouter();

    return (
        <>
            <div className='flex items-center justify-between my-3 shadow-xl'>
                <div className='mx-10 mb-3 '>
                    <span>Task<strong>Now</strong></span>
                </div>
                <div className='flex items-center gap-2 mx-10 rounded-sm mb-3'>
                    <PrimaryButton 
                    title={'Login'}
                    onClick={() => router.push("/login")}
                    />
                    <PrimaryButton 
                    title={'registrar'}
                    onClick={() => router.push("/register")}
                    />
                </div>

            </div>
        </>

    )
}

export default Header
