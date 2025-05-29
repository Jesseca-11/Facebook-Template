import BadgeImg from '../asset/images/image 11.png'
import PeopleImg from '../asset/images/image 12.png'
import World from '../asset/World';

const TeamSection = () => {
    return(
        <div className="flex flex-col w-[95%] mt-5 px-6 bg-[#1F1F27] border border-[#242436] ">
            <div className="flex gap-2 pt-4">
                <img src={BadgeImg} alt="" className='w-9 h-9' />
                <div className="flex flex-col  text-gray-300">
                <h1 className="text-sm">Indian Cricket Team</h1>
                <p className="flex justify-start items-center gap-2 text-xs">5h 
                    <span>
                        <World />
                    </span> </p>
                    </div>
            </div>
            <p className="text-gray-300 py-3 text-sm  leading-5">India has been touring Australia since 1947, 
                but all that changed after winning the first and third Tests
                 in Adelaide and Melbourne, respectively.
                 </p>
                 <img src={PeopleImg} alt="" className="" />
        </div>
    )
}

export default TeamSection;