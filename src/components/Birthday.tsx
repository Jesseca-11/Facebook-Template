import Cake from "../asset/Cake";



const Birthday = () => {
    return(
        <div className="bg-[#1F1F27] border border-[#242436] w-[95%] mt-5 px-3 py-4 ">
            <h2 className="text-gray-400  ">Birthdays</h2>
            <div className="gap-2 flex items-center justify-start pt-3">
                <Cake />
                <p className="text-xs w-[70%] text-white ">Anushka and 2 others have birthdays today.</p>
            </div>
        </div>
    )
}


export default Birthday;