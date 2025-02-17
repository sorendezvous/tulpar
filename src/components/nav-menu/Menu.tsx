import MenuIcon from "./MenuIcon.tsx";
import classes from '../../styles/Menu.module.css'
import PhoneIcon from "./PhoneIcon.tsx";

const Menu = () => {
    return (
        <div className='border-y-1 border-y-slate-300'>
            <div className='container mx-auto flex h-12'>
                <button className={`text-slate-50 flex items-center pl-5 w-44 h-9 self-end rounded-t-lg cursor-pointer ${classes.btn}`}>
                    <MenuIcon/>
                    <span className='uppercase font-semibold text-sm ml-5'>каталог</span>
                </button>

                <nav className='flex gap-9 list-none items-center ml-28'>
                    <li><a href="#">Электроника</a></li>
                    <li><a href="#">Аксессуары</a></li>
                    <li><a href="#">Красота</a></li>
                    <li><a href="#">Мужчинам</a></li>
                    <li><a href="#">Дом</a></li>
                    <li><a href="#">Автотовары</a></li>
                    <li><a href="#">Парфюм</a></li>
                    <li><a href="#">Компьютеры</a></li>
                </nav>

                <div className='flex items-center gap-2 ml-5'>
                    <PhoneIcon/>
                    <div>
                        <div className='flex flex-col text-slate-400'>
                            <span>0(555) 40 75 12</span>
                            <span>0(501) 02 66 21</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;