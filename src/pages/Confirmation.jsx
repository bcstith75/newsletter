import { CheckCircleIcon } from '@heroicons/react/24/solid'



const confirmation = ({clearMessage, email}) => {
  return (
    <div className="flex flex-col items-start p-12 bg-white rounded-xl w-[420px]">

      <CheckCircleIcon className='checkmark-xl'/>

      <h2 className='text-4xl font-bold py-2 text-darkSlateGrey'>Thanks for subscribing!</h2>

      <p className="text-sm mt-4">A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it and click
      the button inside to confirm your subscription.</p>

      <button className='btn w-full' onClick={clearMessage}>Dismiss message</button>


    </div>
  )
}

export default confirmation