import React from 'react'

const RegisterTable = () => {
    return (
        <div className="flex  flex-col  ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table
                            className="min-w-[90%]  border border-[#F46A06] text-center text-sm font-light text-surface  dark:text-white">
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
                                    <td className="whitespace-nowrap px-6 py-4 text-start">Hotel Des milles collines
                                        <a href="#">Edit</a>
                                        <a href="#" className='pl-5'>Delete</a>
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
