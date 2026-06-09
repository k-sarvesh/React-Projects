import { GrDocumentText } from "react-icons/gr";
import { IoMdDownload } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Cards = ({data , reference}) => {
  return (
    <motion.div drag dragConstraints={reference} className="relative w-60 h-72 bg-zinc-700 rounded-[30px] overflow-hidden p-7 ">
        <GrDocumentText className="text-zinc-300 " />
      <p className="text-zinc-300 mt-5">{data.desc}</p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex justify-between px-5 mb-5'>
            <h5 className="text-zinc-400">{data.filesize}</h5>
            {data.close ? <IoClose className='cursor-pointer'/> : <IoMdDownload className="text-zinc-300 cursor-pointer" />}
        </div>
        {data.tag.isOpen &&
         <div className={`${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"} py-2 flex justify-center cursor-pointer`}>
        Downlaod 
      </div>}
        
      </div>
      
    </motion.div>
  )
}

export default Cards
