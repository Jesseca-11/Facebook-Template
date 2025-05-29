import { useState } from "react";
import { stories } from "../constant";
import Plus from "../asset/Plus";


const Stories =  () => {
    return(
        <div className="flex relative gap-3 m-5 items-center justify-center w-[100%] px-2 ">
            {stories.map((data) => (
                <div key={data.id} >
                    <img src={data.images} alt="" />
                    <div className="absolute bottom-[10px] lg:bottom-[-5px] w-[100%]  ">
                        <p className="text-white text-xs ps-4 ">{data.title}</p>
                    </div>

                    {data.id == 0 && (
                        <div className="absolute bottom-[25px] lg:bottom-[10px] left-[40px] cursor-pointer ">
                            <Plus />
                        </div>
                    )}
                </div>
            ) )  }
        </div>
    )
}



export default Stories;