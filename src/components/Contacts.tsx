import LiveVideo from "../asset/LiveVideo";
import Search from "../asset/Search";
import Settings from "../asset/Settings";
import { contacts } from "../constant";




const Contacts = () => {
    return(
        <div className="bg-[#1F1F27] border border-[#242436] w-[95%] mt-6 px-4 py-3">
            <div className="flex justify-between items-center">
                <h2 className=" text-gray-400 ">Contacts</h2>
                <div className="flex gap-2">
                <LiveVideo />
                <Search />
                <Settings />
                </div>
            </div>

            <div className=" mt-5">
            {contacts.map((contact) => (
                <div className="flex items-center justify-start gap-3 pt-4" key={contact.id}>
                    <img src={contact.image} alt="" />
                    <p className="text-gray-300 text-sm">{contact.title}</p>
                </div>
            ))}
            </div>
        </div>
    )
}


export default Contacts;