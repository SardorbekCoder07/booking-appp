import React from 'react'
import RegistrationForm from './registerFrom'
import RegisterTable from './registerTable'

const MainAdminManager = () => {
    const interButton = [
        {
            name: 'Hotel manager'
        },
        {
            name: 'Restaurant manager'
        },
        {
            name: 'Coffe shop manager'
        },

    ]
    return (
        <div className='w-full h-auto bg-[#FFF] rounded-lg'>
            <div className='flex justify-evenly items-center'>
                {interButton &&
                    interButton.map((res, i) =>
                        < button className='px-10 rounded border-2 border-[#F46A06] mt-10 bg-[#F1E8D7]' >
                            {res.name}
                        </button>
                    )
                }
            </div>
            
            <div>
                <RegistrationForm />
                <RegisterTable/>
            </div>
            
        </div >
    )
}

export default MainAdminManager
