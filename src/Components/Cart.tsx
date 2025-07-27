import type { sample } from "./App"
import { Box, Card, Flex, Avatar, Text } from "@radix-ui/themes"

type cartType = {
    cart: sample[]
}

function Cart({ cart }: cartType) {

    return (
        <div className="cart">
            {cart.length>0 && cart.map((item) => (
            <Box maxWidth="240px">
                <Card>
                    <Flex gap="3" align="center">
                        <Avatar
                            size="5"
                            src={item.image}
                            fallback="T"
                        />
                        <Box>
                            <Text as="div" size="2" weight="bold">
                                {item.title}
                            </Text>
                            <Text as="div" size="2" color="gray">
                                ${item.price}
                            </Text>
                        </Box>
                    </Flex>
                </Card>
            </Box>
        ))}
        </div>
    )
}

export default Cart