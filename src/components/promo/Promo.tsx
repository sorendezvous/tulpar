import tablet from '../../assets/img/tablet.png'
import classes from '../../styles/Promo.module.css'

const Promo = () => {
    return (
        <div className={`${classes.promoBG}`}>
            <div className='container mx-auto flex items-center justify-center h-full ml-60'>
                <div className='flex gap-x-10'>
                    <img className='drop-shadow-2xl' src={tablet} alt="tablet"/>

                    <div className='flex flex-col justify-center'>
                        <h2 className='uppercase text-2xl'>новая модель</h2>
                        <h1 className='text-4xl'>Amazon Fire max 11</h1>
                        <span>диагональ 11"</span>
                        <span>экран с IPS матрицей и отличной цветопередачей</span>
                        <span>время работы батареи - 50 часов,</span>
                        <span>объём памяти - 16 ГБ</span>
                        <a href="#" className={`w-40 text-center py-3 rounded-3xl text-slate-50 mt-10 ${classes.link}`}>подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promo;