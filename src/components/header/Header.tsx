import Logo from "./Logo.tsx";
import SearchIcon from "./SearchIcon.tsx";
import classes from '../../styles/Header.module.css'
import {useState} from "react";

const Header = () => {
    const [search, setSearch] = useState('')

    return (
        <div className='container mx-auto'>
            <header className='grid grid-cols-[206px_624px_150px] h-24 items-center justify-between'>
                <Logo />

                <div className='flex items-center h-10 w-[39rem] col-start-2 col-end-3'>
                    <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Найти на tulpar.kg..." className='grow h-10 border-solid rounded-l-lg border-2 border-e-0 p-2' />
                    <button className={`h-10 w-12 rounded-r-lg flex justify-center items-center cursor-pointer ${classes.searchBtn}`}>
                        <SearchIcon/>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;