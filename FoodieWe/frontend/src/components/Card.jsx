import React from 'react'

export default function Card() {
    return (

        <div className=' m-3 inline-block w-72 border border-orange-300 shadow-md shadow-orange-200 rounded-lg'>
            <img className=' rounded-t-lg' src="./src/assets/images/card.jpg" />
            <div className='p-3'>
                <p className='  text-lg'>Card Titel</p>
                <p className='  text-sm'>Some important text</p>
                <div className='grid grid-cols-12 gap-1'>
                    <select className=' bg-orange-400 col-span-3'>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            )
                        })}
                    </select>

                    <select className=' bg-orange-400 col-span-3'>
                        <option value="half">Half</option>
                        <option value="full">Full</option>
                    </select>
                    <div className=' col-span-6'>
                        Total Cost : 
                    </div>
                </div>
            </div>
        </div>
    )
}
