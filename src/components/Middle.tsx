import DisplayStories from "./DisplayStories";
import MindSection from "./Mind";
import Stories from "./Stories";
import TeamSection from "./TeamSection";

const Middle = () => {
    return(
        <div className=" flex flex-col items-center justify-center w-[100%] h-[100%]  ">
            <div className="w-[100%]  lg:w-[74%]   ">
                <DisplayStories />
            </div>
            <div className="w-[100%] lg:w-[74%]">
                <MindSection />
            </div>
            <div className="w-[100%] lg:w-[74%]">
                <TeamSection />
            </div>
        
        </div>
    )
}



export default Middle;