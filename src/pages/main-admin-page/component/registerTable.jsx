import React from 'react'

const RegisterTable = () => {
    return (
        <div className="flex  flex-col ml-[7.5rem] ">
            <div className="overflow-x-auto  sm:-mx-6 lg:-mx-8">
                <div className="py-2 sm:px-6 lg:px-8 ">
                    <div className="overflow-hidden">
                        <table
                            className="min-w-[90%]  border-[2px] border-[#F46A06] rounded text-center text-sm font-light">
                            <thead
                                className="border-b border-neutral-200 font-medium ">
                                <tr>
                                    <th
                                        scope="col"
                                        className="border-e border-neutral-200 px-6 py-4 text-start ">
                                        #
                                    </th>
                                    <th
                                        scope="col"
                                        className="border-e border-neutral-200 px-6 py-4 text-start">
                                        First
                                    </th>
                                    <th
                                        scope="col"
                                        className="border-e border-neutral-200 px-6 py-4 text-start">
                                        Last
                                    </th>
                                    <th scope="col" className="px-6 py-4 text-start">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 font-medium text-start ">
                                        1
                                    </td>
                                    <td
                                        className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 text-start ">
                                        Mark
                                    </td>
                                    <td
                                        className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 text-start ">
                                        Otto
                                    </td>
                                    <td className="whitespace-nowrap px-2 py-4 text-start">Hotel Des milles collines
                                        <a href="#" className='px-4 py-2 rounded-lg text-white ml-4 mr-4 bg-[#F46A06]'>Edit</a>
                                        <a href="#" className='px-4 py-2 rounded-lg text-white bg-[#F46A06]'>Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterTable
