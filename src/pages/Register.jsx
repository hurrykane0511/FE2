import React from 'react';

const Register = () => {
    return (
        <div className='flex flex-col bg-primary-color min-h-screen md:flex-row'>
        <div className="relative p-10 text-center md:text-left md:w-1/4 ">
            <Link to='/' className='text-white text-3xl '><BsChatSquareTextFill className='inline' /> Doot</Link>
            <img src={LoginImg} className='hidden md:block absolute bottom-2 right-0 translate-x-1/2 w-[600px] max-w-[unset]' alt="error" />
        </div>
        <div className="bg-main-screen rounded-2xl m-5 p-5 md:w-3/4">
            <div className="">
                <div className="text-center">
                    <h2 className='text-main font-semibold text-2xl mb-2 "'>Register Account</h2>
                    <p className='text-muted text-xs font-medium mb-4'>Get your free Doot account now.</p>
                    <form action="">
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;
