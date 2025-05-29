  import ProfileImg from "../asset/images/Rectangle 12.png"
import { mindSection } from "../constant";

const MindSection = () =>{
    return(
        <div className="flex flex-col items-center justify-center bg-[#1F1F27] h-[20vh] mt-6 pb-5 w-[95%] border border-[#242436]  ">
            <div className="flex items-center justify-center w-[90%] mx-4 pt-3">
                <img src={ProfileImg} alt=""  className="rounded-full object-cover w-10 h-10 border-white" />
                <form action="" className="ms-2 flex-1">
                    <input type="text"
                    placeholder="What's on your mind"
                     className="bg-[#282835] text-gray-300 px-4 py-2 rounded-3xl w-[100%] outline-0 border-0 " />
                </form>
            </div>
            <div className="flex items-center justify-between bg-[#282835]  mt-4 w-[100%]">
            {mindSection.map((mind) => (
                <a href=""
                key={mind.id}
                className="flex justify-center items-center gap-2 w-[90%] py-2 px-3"
                >
                    <mind.icon />
                    <p className=" text-xs text-gray-400">{mind.title}</p>
                </a>
            )) }
            </div>
        </div>
    )
}




export default MindSection;
