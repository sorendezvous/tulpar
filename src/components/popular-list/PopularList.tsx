import PopularCard from "../popular-card/PopularCard.tsx";

const PopularList = () => {
    return (
        <div className='container mx-auto py-10 grid grid-cols-5 auto-cols-min auto-rows-auto gap-4'>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>

            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
        </div>
    );
};

export default PopularList;