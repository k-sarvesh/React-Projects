import { useRef } from "react";
import Cards from "./Cards"

const Forground = () => {

    const ref = useRef(null)
    const data = [
  {
    desc: "React Complete Guide PDF",
    filesize: "2.4 MB",
    close: true,
    tag: {
      isOpen: true,
      tagTitle: "Download Now",
      tagColor: "green",
    },
  },
  {
    desc: "JavaScript Notes",
    filesize: "1.8 MB",
    close: false,
    tag: {
      isOpen: false,
      tagTitle: "Unavailable",
      tagColor: "blue   ",
    },
  },
  {
    desc: "Tailwind CSS Cheatsheet",
    filesize: "850 KB",
    close: true,
    tag: {
      isOpen: true,
      tagTitle: "Download Now",
      tagColor: "green",
    },
  },
  {
    desc: "Node.js Documentation",
    filesize: "3.1 MB",
    close: false,
    tag: {
      isOpen: true,
      tagTitle: "Premium",
      tagColor: "blue",
    },
  },
];

  return (
    <div ref={ref} className='flex gap-10 flex-wrap fixed top-0 left-0 z-[3] w-full h-full p-10 '>
        {data.map((item, index) => (
            <Cards data={item} key={index} reference={ref} />
        ))}

    </div>
  )
}

export default Forground
