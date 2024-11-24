import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const CardsSection = () => {
    const data =useLoaderData()

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 ml-9 max-w-screen-2xl'>
            {data.map(data => (
                <Card key={data.id} data={data} />
            ))}
        </div>
    );
};

export default CardsSection;