"use client";
import { usePathname, useRouter, useSearchParams} from "next/navigation";
import { MdSearch,} from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) =>{    
      const params = new URLSearchParams(searchParams)
      params.set("page", 1);
      if(e.target.value){
        e.target.value.length > 2 && params.set("q", e.target.value)
      }else{
        params.delete("q")
      }
      replace(`${pathname}?${params}`);
  }, 300);
  
 
  return (
    <div className='relative'>
        <MdSearch size={20} className=' absolute top-2 left-2'/>
        <input type="text" placeholder={placeholder} className="bg-slate-100 rounded-md text-sm h-4 p-4 pl-8" onChange={handleSearch} />
    </div>
  )
}

export default Search