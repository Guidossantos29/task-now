import React from 'react'
import Header from '../components/Header'
import CustomForm from '../components/UI/CustomForm'

function LoginPage() {
  return (
    <>
    <Header showLogin={true} showRegister={false} />
    <div className=" mt-[200px] flex flex-col items-center justify-center ">
      <CustomForm />
    </div>
    
    </>
    
  );
}

export default LoginPage
