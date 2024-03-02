import React, { useState } from 'react'

const Search = ({ onPincodeChange }) => {
    const [pincode, setPincode] = useState('');

    const handleChange = (e) => {
        setPincode(e.target.value.trim())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onPincodeChange(pincode);
        setPincode('');
    }

    return (
        <div className='w-full flex justify-center'>
            <form action=""
                className='w-[100%] flex flex-col gap-7 mt-4 text-center max-w-[400px]'
                onSubmit={handleSubmit}

            >
                <label htmlFor="" className='font-semibold text-[24px]'>
                    Enter Pincode
                    <input
                        type='number'
                        name='pincode'
                        className='input custom-number-input'
                        placeholder='123456'
                        required
                        pattern="[0-9]{6}"
                        value={pincode}
                        onChange={handleChange}
                        style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
                    />
                </label>
                <button
                    className='btn'
                    type='submit'
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search