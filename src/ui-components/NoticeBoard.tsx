import { Scroll } from 'lucide-react'
import banner from "../assets/banner.png"

const NoticeBoard = () => {
  return (
    <div>
        <div className="max-w-[1024px] mx-2 sm:mx-2 lg:mx-auto mt-3 p-3 bg-[#FFFFFF30] rounded-md">
        <div className='grid grid-cols-3 justify-items-center '>
          <div className='col-span-3 sm:col-span-1'>
            <img className='h-48 w-48' src={banner} alt="" />
          </div>
          <div className='col-span-3 sm:col-span-2 text-white flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-lg sm:text-xl mb-2 underline'>Notice Board</h1>
            <div className='flex flex-col gap-y-2 text-sm sm:text-md'>
              <div className='flex items-center gap-x-2'>
                <div>
                  <Scroll className='h-5 w-5'/>
                </div>
                <p>প্রজ্ঞাপন স্মারক-৬৮, চাকরি স্থায়ীকরণ, প্রোগ্রামার ও সহকারী প্রোগ্রামার, তথ্য ও যোগায...</p>
              </div>
              <div className='flex items-center gap-x-2'>
                <div>
                  <Scroll className='h-5 w-5'/>
                </div>
                <p>অফিস আদেশ (দায়িত্ব বণ্টন)</p>
              </div>
              <div className='flex items-center gap-x-2'>
                <div>
                  <Scroll className='h-5 w-5'/>
                </div>
                <p>২০২৪-২০২৫ অর্থবছরের বিজ্ঞপ্তি</p>
              </div>
              <div className='flex items-center gap-x-2'>
                <div>
                  <Scroll className='h-5 w-5'/>
                </div>
                <p>Aspire to Innovate (a2i) প্রোগ্রামের জন্য খাদ্য এবং রিফ্রেশমেন্ট সংগ্রহের জন্য ই-টেন্ডার...</p>
              </div>
              <div className='flex items-center gap-x-2'>
                <div>
                  <Scroll className='h-5 w-5'/>
                </div>
                <p>অফিস আদেশ (অবমুক্তি, জনাব মির্জা মুরাদ হাসান বেগ, উপ-পরিচালক)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoticeBoard