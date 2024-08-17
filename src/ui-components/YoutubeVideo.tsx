import ReactPlayer from 'react-player/lazy'

const YoutubeVideo = () => {
  return (
    <div>
        <div className="max-w-[1024px] lg:mx-auto mt-3 p-3 bg-[#FFFFFF30] rounded-md text-white mx-2 sm:mx-2">
        <h1 className='text-center mb-5 text-lg sm:text-xl font-semibold'>What to do during floods</h1>
        <div className=''>
        <ReactPlayer controls={true} width="100%" url='https://youtu.be/GT9ShGE_qjg?si=eB-EYy1RBxVEUs62' />
        </div>
      </div>
    </div>
  )
}

export default YoutubeVideo