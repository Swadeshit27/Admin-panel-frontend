// Form.js
import React, { useState } from 'react';

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [detailsEntered, setDetailsEntered] = useState(true);

    const handleLogin = () => {
        if (email.trim() === '' || password.trim() === '') {
            setDetailsEntered(false);
        } else {
            setDetailsEntered(true);
            console.log(`Logged in with Email: ${email}, Password: ${password}`);
        }
    };

    const handleLogout = () => {
        window.location.href = '/signup';
    };

    return (
        <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Sign in to our platform</h1>

            <div className='mt-8'>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your email"
                    />
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your password"
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input type="checkbox" id='remember' />
                        <label className='ml-2 font-medium text-base' htmlFor="remember">Remember</label>
                    </div>
                    <button className='font-medium text-base text-violet-500'>Forgot password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg' onClick={handleLogin}>Login</button>
                    <button
                        className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 '>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* ... (Google sign-in icon SVG) */}
                        </svg>
                        sign in with Google
                    </button>
                    <button className='text-violet-500 font-medium text-base' onClick={handleLogout}>Cancel</button>
                </div>
            </div>
            {!detailsEntered && <p className='text-red-500 mt-4'>Please enter your details.</p>}
        </div>
    )
}
