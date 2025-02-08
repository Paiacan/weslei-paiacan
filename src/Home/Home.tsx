import MainGrid from "./components/MainGrid";
import SideBar from "./components/SideBar";


const Home: React.FC = () => {
    return (
        <>
        <div className="flex flex-col lg:flex-row w-screen  h-screen overflow-x-hidden">
            <SideBar/>
            <MainGrid/>
        </div>
        </> 
    );
}

export default Home;