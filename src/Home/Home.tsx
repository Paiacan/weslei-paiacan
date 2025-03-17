import { useLocation } from "react-router-dom";
import MainGrid from "./components/MainGrid";
import SideBar from "./components/SideBar";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { TAG_MANAGER_CONSTANTS } from "../utils/constants";

interface HomeProps {
    isCookiesAccepted: boolean | null;
}

const Home: React.FC<HomeProps> = ({ isCookiesAccepted }) => {

    const location = useLocation();

  useEffect(() => {
    if (isCookiesAccepted) {
        const tagManagerArgs = {
            dataLayer: {
              event: TAG_MANAGER_CONSTANTS.PAGE_VIEW,
              page: location.pathname,
              pageName: TAG_MANAGER_CONSTANTS.PAGE_HOME
            },
          };
          TagManager.dataLayer(tagManagerArgs);
    }
  }, [isCookiesAccepted, location]);

    return (
        <>
        <div className="flex flex-col lg:flex-row w-screen  h-screen overflow-x-hidden">
            <SideBar/>
            <MainGrid isCookiesAccepted={isCookiesAccepted}/>
        </div>
        </> 
    );
}

export default Home;