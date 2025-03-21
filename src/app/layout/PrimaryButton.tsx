import React from 'react'

interface ButtonProps {
    title: string,
    backgroundColor?: string,
    onClick?: () => void
}

const PrimaryButton: React.FC<ButtonProps> = ({ title, backgroundColor="blue", onClick }) => {
    return (
        <button
        className='rounded-sm'
         onClick={onClick}
         style={{ backgroundColor, padding: '10px 20px', border: 'none', cursor: 'pointer' }}
        >
            {title}
        </button>
    )
}

export default PrimaryButton
