const Advantages = () => {
    const items: {img: string, text1: string, text2: string}[] = [
        {img: '', text1: 'Условия доставки', text2: 'Зона охвата'},
        {img: '', text1: 'Безопасность платежей', text2: 'Список банков'},
        {img: '', text1: 'Обратная связь', text2: 'Виды связи'},
        {img: '', text1: 'Покупка через приложение', text2: 'Установка'},
    ]

    return (
        <div className='container mx-auto py-20 flex justify-between'>
            {items.map(item => (
                <div className='flex gap-2' key={item.text1}>
                    <div className='w-12 h-12'>
                        <img src={undefined} alt=""/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='font-semibold'>{item.text1}</span>
                        <span>{item.text2}</span>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Advantages;