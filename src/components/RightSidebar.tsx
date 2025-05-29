import Birthday from "./Birthday";
import Contacts from "./Contacts";
import Page from "./Page";


const RightSidebar = () => {
    return(
        <div className="me-4 hidden lg:block ">
        <div className=""><Page /></div>
        <div className=""><Birthday />  </div>
        <div className=""><Contacts /> </div>
        </div>
    )
}



export default RightSidebar;