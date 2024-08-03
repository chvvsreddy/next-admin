import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <div className="fixed">
      <div className="box relative">
        <div className="absolute w-20 h-20 bottom-4 right-4 opacity-50">
          <Image src="/astronaut.png" alt="" fill className="object-cover" />
        </div>
        <div className="text-xs z-10 flex flex-col gap-4">
          <span className="font-semibold">🔥 Available Now</span>
          <h3 className="text-sm font-bold">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="">Takes 4 minutes to learn</span>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex gap-2 bg-blue-800 text-white rounded-md items-center justify-center p-2 cursor-pointer max-w-min">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="box relative mt-4">
        <div className="absolute w-20 h-20 bottom-4 right-4 opacity-50">
          <Image src="/astronaut.png" alt="" fill className="object-cover" />
        </div>
        <div className="text-xs z-10 flex flex-col gap-4">
          <span className="font-semibold">🚀 Coming Soon</span>
          <h3 className="text-sm font-bold">
          New server actions are available, partial pre-rendering is coming up!
          </h3>
          <span className="">Boost your productivity</span>
          <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex gap-2 bg-blue-800 text-white rounded-md items-center justify-center p-2 cursor-pointer max-w-min">
          <MdReadMore />
          Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
