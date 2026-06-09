import { GrDocumentText } from "react-icons/gr";
import { IoMdDownload } from "react-icons/io";


const Cards = () => {
  return (
    <div className="relative w-60 h-72 bg-zinc-700 rounded-[30px] overflow-hidden p-7  ">
        <GrDocumentText className="text-zinc-300 " />
      <p className="text-zinc-300 mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex justify-between px-5 mb-5'>
            <h5 className="text-zinc-400">.4mb</h5>
        <IoMdDownload className="text-zinc-300 cursor-pointer" />
        </div>
        <div className='bg-green-500 py-2 flex justify-center cursor-pointer'>
        Downlaod 
      </div>
        
      </div>
      
    </div>
  )
}

export default Cards
