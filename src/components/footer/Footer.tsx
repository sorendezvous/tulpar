import classes from '../../styles/Footer.module.css'
import Qr from "./QR.tsx";
import Logo from "./Logo.tsx";

const Footer = () => {
    return (
        <footer className={`container mx-auto rounded-xl p-6 saturate-[.9] hue-rotate-[22deg] brightness-[1.3] flex items-start justify-between ${classes.footerBG}`}>
            <div className='flex flex-col'>
                <span className='uppercase font-semibold'>контакты</span>
                <a href="#">офис</a>
                <a href="#">склады</a>
                <a href="#">написать нам</a>
            </div>

            <div className='flex flex-col'>
                <span className='uppercase font-semibold'>о нас</span>
                <a href="#">история</a>
                <a href="#">отзывы</a>
            </div>

            <div className='flex flex-col'>
                <span className='uppercase font-semibold'>магазин</span>
                <a href="#">адрес</a>
                <a href="#">условия возврата</a>
            </div>

            <div className='flex flex-col'>
                <span className='uppercase font-semibold'>брэнд тулпар</span>
                <a href="#">франшиза</a>
                <a href="#">условия покупки</a>
                <a href="#">условия использования</a>
            </div>

            <div className='flex flex-col'>
                <span className='uppercase font-semibold'>партнёрам</span>
                <a href="#">виртуальный склад</a>
                <a href="#">условия</a>
                <a href="#">список партнёров</a>
            </div>

            <div>
                <div className='flex gap-4 justify-end'>
                    <Qr/>
                    <Logo/>
                </div>
                <a href='#'>условия пользования сайтом</a>
            </div>
        </footer>
    );
};

export default Footer;