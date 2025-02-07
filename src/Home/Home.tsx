import MainGrid from "./components/MainGrid";
import SideBar from "./components/SideBar";


function Home() {
    return (
        <>
        <div className="grid grid-cols-[auto_1fr] w-screen h-full">
            <SideBar/>
            <MainGrid/>
        </div>
        </>
    );
}

export default Home;