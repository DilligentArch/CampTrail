import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const CardsSection = () => {
    const data =useLoaderData()

    return (
        <div>
              <h2 className="text-3xl font-bold text-center mb-6">Featured Adventures</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto lg:grid-cols-3 gap-6 my-12  max-w-screen-2xl'>
            {data.map(data => (
                <Card key={data.id} data={data} />
            ))}
        </div>
        </div>
    );
};

export default CardsSection;