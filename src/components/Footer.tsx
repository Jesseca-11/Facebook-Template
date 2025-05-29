

const Footer = () => {
    return(
        <div className="flex flex-col justify-center text-xs text-gray-400 pb-2  ">
            <ul className="flex gap-6 text-start ">
                <li className=" ">Privacy</li>
                <li className="list-disc">Tearms</li>
                <li className="list-disc">Advertising</li>
                <li className="list-disc">Cookies</li>
                <li className="list-disc">More</li>
            </ul>
                <ul className="flex items-center justify-start pt-3 gap-6 ">
                <li className="">Meta &copy;2023 </li>
                <li className="list-disc">@Vinay_Tekwani</li>

                </ul>
        </div>
    )
}


export default Footer;