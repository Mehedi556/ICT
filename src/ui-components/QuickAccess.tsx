import { CircleCheckBig, Pause, Play, Volume1 } from "lucide-react"
import hotline1 from "../assets/hotlines/hotline1.png"
import hotline2 from "../assets/hotlines/hotline2.png"
import hotline3 from "../assets/hotlines/hotline3.png"
import hotline4 from "../assets/hotlines/hotline4.png"
import hotline5 from "../assets/hotlines/hotline5.png"
import hotline6 from "../assets/hotlines/hotline6.png"
import hotline7 from "../assets/hotlines/hotline7.png"
import hotline8 from "../assets/hotlines/hotline8.png"
import hotline9 from "../assets/hotlines/hotline9.png"
import hotline10 from "../assets/hotlines/hotline10.png"
import hotline11 from "../assets/hotlines/hotline11.png"
import hotline12 from "../assets/hotlines/hotline12.png"
import flag from "../assets/flag.jpg"
import dengu from "../assets/dengu.jpg"
import { useRef, useState } from "react"

const sound = {
    title: "National Anthem",
    waveType: "song.mp3",
    imageUrl: ""
}



const QuickAccess = () => {
    const [play, setPlay] = useState(false);
    const oceanRef = useRef<HTMLAudioElement>(null);
    const MAX = 20;

    function toggleAudio(): void {
        if (play) {
            oceanRef.current?.pause();
            setPlay(false);
        } else {
            void oceanRef.current?.play();
            setPlay(true);
        }
    }

    function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        const volume = Number(value) / MAX;
        oceanRef.current.volume = volume;
    }

    return (
        <div>
            <div className="max-w-[1024px] lg:mx-auto mx-2 sm:mx-2 mt-3 p-3 bg-[#FFFFFF30] rounded-md text-white">
                <h1 className='text-center mb-5 text-lg sm:text-xl font-semibold'>Quick Access & Support</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                    <div className='p-3 bg-[#FFFFFF30] rounded-md'>
                        <h1 className='text-center mb-5 text-lg sm:text-xl font-semibold'>Internal E-Service</h1>
                        <div className='flex flex-col gap-y-1'>
                            <div className='flex items-center gap-x-2'>
                                <CircleCheckBig className='h-4 w-4' />
                                <p className='text-sm hover:underline'>Web Mail</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <CircleCheckBig className='h-4 w-4' />
                                <p className='text-sm hover:underline'>Online Application</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <CircleCheckBig className='h-4 w-4' />
                                <p className='text-sm hover:underline'>National Enterprise Architecture</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <CircleCheckBig className='h-4 w-4' />
                                <p className='text-sm hover:underline'>CIRT</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <CircleCheckBig className='h-4 w-4' />
                                <p className='text-sm hover:underline'>Online Recruitment System</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <CircleCheckBig className='h-4 w-4' />
                                <p className='text-sm hover:underline'>Bangladesh Hi-Tech Park Authority</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-3 bg-[#FFFFFF30] rounded-md'>
                        <h1 className='text-center mb-5 text-lg sm:text-xl font-semibold'>Important Link</h1>
                        <div className='flex flex-col gap-y-1'>
                            <div className='flex items-center gap-x-2'>
                                <CircleCheckBig className='h-4 w-4' />
                                <p className='text-sm hover:underline'>President's Office</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <CircleCheckBig className='h-4 w-4' />
                                <p className='text-sm hover:underline'>Prime Minister's Office</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <CircleCheckBig className='h-4 w-4' />
                                <p className='text-sm hover:underline'>Cabinet Division</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <CircleCheckBig className='h-4 w-4' />
                                <p className='text-sm hover:underline'>Bangladesh Karmachari Kallyan Board</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <CircleCheckBig className='h-4 w-4' />
                                <p className='text-sm hover:underline'>National Skills Development Authority</p>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <CircleCheckBig className='h-4 w-4' />
                                <p className='text-sm hover:underline'>Primary Digital Content</p>
                            </div>
                        </div>
                    </div>

                    <div className='p-3 bg-[#FFFFFF30] rounded-md'>
                        <h1 className='text-center mb-5 text-lg sm:text-xl font-semibold'>Visitor Counter</h1>
                        <div>
                            <table className="w-full text-sm text-left">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-3 py-2">
                                            Today
                                        </td>
                                        <td className="px-3 py-2">
                                            516
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-3 py-2">
                                            Yesterday
                                        </td>
                                        <td className="px-3 py-2">
                                            2570
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="px-3 py-2">
                                            All
                                        </td>
                                        <td className="px-3 py-2">
                                            5333947
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td className="px-3 py-2">
                                            Online
                                        </td>
                                        <td className="px-3 py-2">
                                            42
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='p-3 bg-[#FFFFFF30] rounded-md'>
                        <h1 className='text-center mb-5 text-lg sm:text-xl font-semibold'>Emergency Hotlines</h1>
                        <div className='grid grid-cols-4 gap-1 mt-6'>
                            <img className="object-cover object-center w-full h-full rounded-md" src={hotline1} alt="" />
                            <img className="object-cover object-center w-full h-full rounded-md" src={hotline2} alt="" />
                            <img className="object-cover object-center w-full h-full rounded-md" src={hotline3} alt="" />
                            <img className="object-cover object-center w-full h-full rounded-md" src={hotline4} alt="" />
                            <img className="object-cover object-center w-full h-full rounded-md" src={hotline5} alt="" />
                            <img className="object-cover object-center w-full h-full rounded-md" src={hotline6} alt="" />
                            <img className="object-cover object-center w-full h-full rounded-md" src={hotline7} alt="" />
                            <img className="object-cover object-center w-full h-full rounded-md" src={hotline8} alt="" />
                            <img className="object-cover object-center w-full h-full rounded-md" src={hotline9} alt="" />
                            <img className="object-cover object-center w-full h-full rounded-md" src={hotline10} alt="" />
                            <img className="object-cover object-center w-full h-full rounded-md" src={hotline11} alt="" />
                            <img className="object-cover object-center w-full h-full rounded-md" src={hotline12} alt="" />
                        </div>
                    </div>

                    <div className='p-3 bg-[#FFFFFF30] rounded-md'>
                        <h1 className='text-center mb-5 text-lg sm:text-xl font-semibold'>To Prevent Dengue</h1>
                        <img className="object-cover object-center w-full h-44" src={dengu} alt="" />
                    </div>

                    <div className='p-3 bg-[#FFFFFF30] rounded-md'>
                        <h1 className='text-center mb-5 text-lg sm:text-xl font-semibold'>National Anthem</h1>
                        <main className="flex flex-col items-center justify-center">
                            <div className=" flex h-fit max-w-fit flex-col rounded-md  text-center shadow">
                                <div className="relative flex flex-col space-y-0">
                                    <img
                                        className="w-full h-full object-cover object-center"
                                        src={flag}
                                    />
                                    <button
                                        onClick={toggleAudio}
                                        type="button"
                                        className="absolute right-8 left-0 top-[25%] m-auto w-9 rounded-full p-2 text-white shadow-sm"
                                    >
                                        {!play ? (
                                            <Play className="h-12 w-12" aria-hidden="true" />
                                        ) : (
                                            <Pause className="h-12 w-12" aria-hidden="true" />
                                        )}
                                    </button>
                                    <dl className="mt-1 flex flex-col p-4 absolute right-5 left-5 top-[45%]">
                                        <dd className="text-lg text-white text-center">{sound.title}</dd>
                                    </dl>
                                    <div className="mx-4 flex absolute right-5 left-5 top-[80%]">
                                        <input
                                            type="range"
                                            className="mr-2 w-full accent-cyan-700"
                                            min={0}
                                            max={MAX}
                                            onChange={(e) => handleVolume(e)}
                                        />
                                        <Volume1
                                            className="h-5 w-5 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                            </div>
                            <audio ref={oceanRef} loop src={"/public/song.mp3"} />
                        </main>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default QuickAccess