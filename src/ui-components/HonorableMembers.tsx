import adviser from "../assets/adviser.jpg";
import secretary from "../assets/secretary.jpg";
import psAdviser from "../assets/psAdviser.jpg"

const HonorableMembers = () => {
    return (
    <div>
        <div className="max-w-[1024px] mx-2 sm:mx-2 lg:mx-auto mt-3 p-3 bg-[#FFFFFF30] rounded-md text-white">
        <h1 className='text-center mb-5 text-lg sm:text-xl font-semibold'>Our Honorable Members</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 align-items-center items-center gap-2 sm:gap-5">
          <div className="flex flex-col items-center bg-[#FFFFFF30] p-3 rounded-md col-span-3 sm:col-span-1">
            <img className="h-72 w-72 object-cover object-center rounded-md" src={adviser} alt="" />
            <h1 className="font-semibold text-md sm:text-lg">MD. Nahid Islam</h1>
            <p className="text-sm">Honorable Adviser</p>
            <button className="mt-2 border w-[95%] py-1.5 rounded-md bg-[#FFFFFF30]">See Details</button>
          </div>
          <div className="flex flex-col items-center bg-[#FFFFFF30] p-3 rounded-md col-span-3 sm:col-span-1">
            <img className="h-72 w-72 object-cover object-center rounded-md" src={secretary} alt="" />
            <h1 className="font-semibold text-md sm:text-lg">MD. Nahid Islam</h1>
            <p className="text-sm">Honorable secretary</p>
            <button className="mt-2 border w-[95%] py-1.5 rounded-md bg-[#FFFFFF30]">See Details</button>
          </div>
          <div className="flex flex-col items-center bg-[#FFFFFF30] p-3 rounded-md col-span-3 sm:col-span-2 md:col-span-1">
            <img className="h-72 w-72 object-cover object-center rounded-md" src={psAdviser} alt="" />
            <h1 className="font-semibold text-md sm:text-lg">R H M ALAOL KABIR</h1>
            <p className="text-sm">Private Secretary to Honorable Adviser</p>
            <button className="mt-2 border w-[95%] py-1.5 rounded-md bg-[#FFFFFF30]">See Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HonorableMembers