import { useEffect, useState } from "react"
import { Card, Box, Inset, Text, Button} from "@radix-ui/themes"
import styles from "../Styles/Shop.module.css"
import {Link} from "react-router-dom"


import type { sample } from "./App"
import type { ShopProps } from "./App"

function Shop({ count, setCount, cart, setCart } : ShopProps) {
    const [data, setData] = useState<sample[]>([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data))
    }, []);

    const handleAddToCart = (item:sample) => {
        let currCart = [...cart, item];
        setCart(currCart);
        setCount(count+1);
        console.log(cart);
    }

    return (
        <div className={styles.cardsContainer}>
            {
                data.length > 0 ? (
                    data.map((item) => (
                            <div className={styles.card}>
                                <Link to="/" className={styles.link}>
                                <Box maxWidth="340px">
                                    <Card size="4">
                                        <Inset clip="padding-box" side="top" pb="current">
                                            <img
                                                src={item.image}
                                                alt="Bold typography"
                                                style={{
                                                    display: "block",
                                                    objectFit: "contain",
                                                    width: "100%",
                                                    height: "300px",
                                                }}
                                            />
                                        </Inset>
                                        <Text as="p" size="3" className={styles.title}>
                                            {item.title}
                                        </Text>
                                        <Button className={styles.addToCart} onClick={()=> handleAddToCart(item)}>
	                                        Add to cart
                                        </Button>
                                    </Card>
                                </Box>
                                </Link>
                            </div>
                    ))
                ) : (
                    <p>Loading</p>
                )}
        </div>
    )


}

export default Shop