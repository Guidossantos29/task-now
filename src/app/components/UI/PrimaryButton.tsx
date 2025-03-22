import React from 'react';

interface ButtonProps {
    title: string;
    backgroundColor?: string;
    onClick?: () => void;
    className?: string; 
}

const PrimaryButton: React.FC<ButtonProps> = ({ title, backgroundColor = "blue", onClick, className }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor, padding: '10px 20px', border: 'none', cursor: 'pointer' }}
            className={`rounded-sm ${className}`} 
        >
            {title}
        </button>
    );
};

export default PrimaryButton;
