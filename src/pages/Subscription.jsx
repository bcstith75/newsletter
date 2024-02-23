import { useState } from 'react';
import desktopImg from '../assets/illustration-sign-up-desktop.svg';
import mobileImg from '../assets/illustration-sign-up-mobile.svg';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

import Confirmation from './pages/Confirmation'



const Subscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleOnSubmit = (e) => {
    e.preventDefault;

    setIsSubmitted(true)
  }


  return (
    <>

{
  isSubmitted ?

        <Confirmation />

  :
       
    (<div className="flex flex-col justify-center items-center p-4  bg-white rounded-3xl md:w-1/2">
       <div className="flex flex-col lg:flex-row lg:justify-evenly">
          <img src={mobileImg} alt="" className="sm:block md:block lg:hidden"/>

          <div className="md:pr-8 md:pl-8 md:pt-6 font-roboto">

            <h2 className='text-4xl font-bold text-center py-2 text-darkSlateGrey md:text-left md:mt-6 lg:mt-12'>Stay updated!</h2>

            <p className="text-sm font-charcoalGrey py-2">Join 60,000+ product managers receiving monthly updates on:</p>

            <div className="py-4 text-sm">

              <div className="flex flex-row space-x-2 items-center py-2">
                <CheckCircleIcon className='checkmark-sm'/>
                <span>Product discovery and building what matters</span>
              </div>

              <div className="flex flex-row space-x-2 items-center py-2">
                <CheckCircleIcon className='checkmark-sm'/>
                <span>Measuring to ensure updates are a success</span>
              </div>

              <div className="flex flex-row space-x-2 items-center py-2">
                <CheckCircleIcon className='checkmark-sm'/>
                <span>And much more!</span>
              </div>

            </div>


            <p className="text-sm font-bold font-charcoalGrey py-2">Email address</p>

            <form onSubmit={handleOnSubmit}>

            <input
            className="border-1 border-gray-500 p-2 rounded-md w-full focus:outline-teal-500 shadow-md"
             type="text" name="name" value={email} placeholder='email@company.com'
             onChange={(e) => setEmail(e.target.value)}/>

            <button type="submit" className='btn'>Subscribe to monthly newsletter</button>

            </form>

          </div>

            <img src={desktopImg} alt="" className='md:w-1/2 hidden lg:block'/>

        </div>
    </div>)
}
    </>
  )
}

export default Subscription