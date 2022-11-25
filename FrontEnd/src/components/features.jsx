//This component is the extension of the landing page.
import React from 'react'

export const Features = () => {
    return (
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">

            <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                    Prescriptoken vs Traditional Prescription
                </h2>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    Using prescriptoken have many advantages over the traditional method of prescribing to patients.
                </p>
            </div>

            {/* Advantages */}
            <div className="flex flex-col space-y-8 md:w-1/2">
                {/* Item 1 */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                    <div className="rounded-l-full bg-lightGrey md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightBlue">
                                1
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Fraud Prevention
                            </h3>
                        </div>
                    </div>

                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block">
                            Fraud Prevention
                        </h3>
                        <p className="text-darkGrayishBlue">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                    <div className="rounded-l-full bg-lightGrey md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightBlue">
                                2
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Automatic Refills
                            </h3>
                        </div>
                    </div>

                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block">
                            Automatic Refills
                        </h3>
                        <p className="text-darkGrayishBlue">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">

                    <div className="rounded-l-full bg-lightGrey md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightBlue">
                                3
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">
                                Ease of Access
                            </h3>
                        </div>
                    </div>

                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block">
                            Ease of Access
                        </h3>
                        <p className="text-darkGrayishBlue">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                    </div>
                </div>
            </div>

        </div>

    )
}
