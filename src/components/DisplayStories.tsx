import { useState } from "react";
import Stories from "./Stories";
import Reels from "./Reels";
import BookImg from "../asset/Book" 
import VideoImg from "../asset/Video" 


const DisplayStories = () => {
    const [activeTab, setActiveTab] = useState<string>("Stories")
    const tabs = [
        {name: "Stories", icon: BookImg },
        {name: "Reels", icon: VideoImg},
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "Stories":
                return <Stories />
            case "Reels":
                return <Reels /> 
             default:
                return null;      
        }
    };


    return(
        <div className="flex-col bg-[#1F1F27] mt-4 lg:mt-8 pb-5 w-[95%]  border border-[#242436] ">
            <div className="text-white flex justify-around items-center border-b border-[#242436]   ">
            {tabs.map((tab) => {
                const Icon = tab.icon;

                return(
                <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center justify-between text-sm gap-2 px-6 cursor-pointer  ${
                                activeTab === tab.name 
                                  ? " text-[#2374E1] py-4 w-[23%] text-sm border-b-2 border-[#2374E1] font-medium"
                                  : "text-white   py-3  "
                              }`}
                >
                    
                    <Icon  className={` ${activeTab === tab.name ? "text-[#2374E1]" : "text-white"}`} /> 
                    {tab.name}
                </button>
            );
}) }
            </div>
            <div className="flex w-full lg:h-[30vh] mt-[5px] lg:mt-[30px]">{renderContent()}</div>
        </div>
    )
}



export default DisplayStories;