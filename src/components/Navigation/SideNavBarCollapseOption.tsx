import React, { useState } from "react";
import { ChevronDown } from "../Icons/Chevron";

interface ISideNavBarCollapseOption {
    icon: React.ReactNode ,
    label:string ,
    isMini:boolean ,
    children: React.ReactNode ,
}

function SideNavBarCollapseOption({ icon, label, isMini, children }:ISideNavBarCollapseOption) {

  const [open,setOpen] = useState(false)

  return (
    <li
      className={`relative flex flex-col w-full  `}      
    >
      <div className="flex w-full justify-between items-center group cursor-pointer hover:rounded-lg hover:shadow-lg py-2 px-4 gap-2
      hover:bg-blue-700/80
      text-slate-600 hover:text-white
      dark:text-white dark:hover:bg-blue-800"            
      onClick={()=>{
        setOpen(prev => !prev)
      }}
      >
        <a
          href="#"
          className="[text-wrap:pretty;] flex gap-2 items-center justify-between"
        >
          <i
            className={`${
              isMini && "text-center justify-center font-bold text-xl"
            }`}
          >
            {icon}
          </i>
          {!isMini && <span>{label}</span>}
        </a>

        <span className={`transition-all delay-75 ${open && 'rotate-180'}`}>
          <ChevronDown size={4} />
        </span>  
      </div>    
      <ul className={`flex flex-col transition-all delay-75 ${!open && 'hidden'} `}>
        {children}
      </ul>      

    </li>
  );
}

export default SideNavBarCollapseOption;
