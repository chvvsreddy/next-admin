import { MdSupervisedUserCircle } from "react-icons/md";
const Card = () => {
  return (
    <div className='card'>
      < MdSupervisedUserCircle/>
      <div className="flex flex-col gap-2">
        <span>Total Users</span>
        <span className="text-xl font-medium">10,273</span>
        <span className="text-sm"><span className="text-green-400">12%</span> More than Previous week </span>
      </div>
    </div>
  )
}

export default Card