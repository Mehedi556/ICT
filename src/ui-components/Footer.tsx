
import logo from "../assets/logo.png"
import facebook from "../assets/icons/facebook.png"
import twitter from "../assets/icons/twitter.png"
import youtube from "../assets/icons/youtube.png"
import support from "../assets/icons/support.png"

const Footer = () => {
    return (

        <div className='bg-[#FFFFFF30]'>
            <div className="max-w-[1024px] mx-auto mt-3 text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 align-items-center py-5">
                <div className='text-center col-span-3 sm:col-span-1'>
                    <h1 className='font-semibold mb-2'>More Links</h1>
                    <div className='text-sm flex flex-col gap-y-1'>
                        <p>Sitemap</p>
                        <p>Secrecy Policy</p>
                        <p>Contact</p>
                        <p>FAQ</p>
                        <p>ব্যবহারের শর্তাবলি</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center col-span-3 sm:col-span-1 mt-6 sm:mt-0 md:mt-0'>
                    <img className='h-20 w-20' src={logo} alt="" />
                    <p className='text-lg font-bold'>Bangladesh National Portal</p>
                    <div className='flex justify-center gap-x-2 mt-2'>
                        <img className='w-6 h-6' src={facebook} alt="" />
                        <img className='w-6 h-6' src={twitter} alt="" />
                        <img className='w-6 h-6' src={youtube} alt="" />
                    </div>
                </div>
                <div className="col-span-3 sm:col-span-2 md:col-span-1 mt-6 sm:mt-6 md:mt-0">
                    <h1 className='text-xs text-center'>Planning and implimentation: <br /> Cabinet Devision, a2i, BCC, DOICT, BASIS</h1>
                    <div className='text-center mt-7 flex flex-col justify-center items-center'>
                        <p>Technical Support:</p>
                        <img className='w-[50%] sm:w-[60%] md:w-[80%]' src={support} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer