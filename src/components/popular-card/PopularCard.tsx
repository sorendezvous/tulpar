import classes from '../../styles/PopularCard.module.css'
import CartIcon from "./CartIcon.tsx";
import product from '../../assets/img/product.png'

const PopularCard = () => {
    return (
        <div className='rounded-xl w-[15.25rem] transition delay-100 duration-100 ease-in-out hover:bg-sky-200/40'>
            <a href="#">
                <div className='w-[15.25rem] h-56'>
                    <img src={product} alt=""/>
                </div>

                <div className='p-5 flex flex-col gap-2'>
                    <div>
                        <span className='text-3xl font-semibold'>4140</span>
                        <span className='text-2xl font-semibold text-slate-400'> сом</span>
                    </div>

                    <div>
                        <p className='text-xs'>Ультрастойкое керамическое покрытие PRO 5 Ceramic</p>
                    </div>

                    <div>
                        <p className='font-semibold'>бесплатная доставка</p>
                    </div>
                </div>
            </a>

            <button
                className={`w-full py-4 text-slate-50 font-light rounded-xl cursor-pointer flex items-center justify-center gap-x-8 ${classes.btn}`}>
                <CartIcon/>
                <span>осталось 23 шт</span>
            </button>
        </div>
    );
};

export default PopularCard;