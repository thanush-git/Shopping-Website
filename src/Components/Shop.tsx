import { useEffect, useState } from "react"

type sample = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

function Shop() {
    const [data, setData] = useState<sample[]>([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);


    return (
        <div>
            {
                data.length > 0 ? (
                    data.map((item) => (
                        <div>
                            <img src={item.image} alt={item.title} />
                            <h1>{item.title}</h1>
                        </div>
                    ))
                ) : (
                    <p>Loading</p>
                )}
        </div>
    )


}

export default Shop