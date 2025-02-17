import Header from "./components/header/Header.tsx";
import Menu from "./components/nav-menu/Menu.tsx";
import Promo from "./components/promo/Promo.tsx";
import PopularList from "./components/popular-list/PopularList.tsx";
import Advantages from "./components/advantages/Advantages.tsx";
import Footer from "./components/footer/Footer.tsx";


function App() {
    return (
        <>
            <Header />
            <Menu/>
            <Promo/>
            <PopularList/>
            <Advantages/>
            <Footer/>
        </>
    )
}

export default App
