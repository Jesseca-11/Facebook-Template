import IccImg from '../asset/images/iccImg.png'
import Speaker from '../asset/Speaker';

const Page = () => {
    return(
        <div className="relative px-4 py-4  me-8 mt-8 bg-[#1F1F27] border border-[#242436] w-[95%] ">
            <h2 className="text-sm text-gray-400 ">Your Pages And Profiles</h2>
            <div className="flex justify-between items-center text-sm pt-4 ">
                <img src={IccImg} alt="" />
                <p className="flex flex-col text-white">ICC Officials
                    <span className='text-xs text-gray-300'>@icc_officials</span>
                </p>
                <Speaker />
            </div>
            <div className="absolute top-[78px] left-[40px]   ">
                <p className='text-white bg-red-600 rounded-full px-1 text-xs'>4</p>
                </div>
        </div>
    )
}


export default Page;