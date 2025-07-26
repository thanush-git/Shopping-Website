import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Shop from "./Shop";

export type sample = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

type CartStates = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

type Cart = {
    cart: sample[],
    setCart: React.Dispatch<React.SetStateAction<sample[]>>;
}



export type ShopProps = CartStates & Cart;

const App = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState<sample[]>([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Nav count={count}/>,
      children: [
        { index: true, element: <Home /> },
        {
          path: "shop",
          element: <Shop count={count} setCount={setCount} cart={cart} setCart={setCart}/>,
        },
      ],
    },
    {
      path: "home",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;