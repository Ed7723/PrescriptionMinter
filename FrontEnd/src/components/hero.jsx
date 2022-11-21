import React from 'react'

export const Hero = () => {
    return (
        <div className="relative px-6 md:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32 md:pt-48 md:pb-40">
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    Prescribe with ease with NFTs
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-600 md:text-center">
                    Welcome to Prescriptoken. Through the use of block-chain technology, prescription of
                    drugs and medicine to patients can now be done with ease and security.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <button className="inline-block rounded-lg px-3 py-1.5 font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 px-4 leading-7">Get Started</button>
                </div>
            </div>
        </div>
    )
}
