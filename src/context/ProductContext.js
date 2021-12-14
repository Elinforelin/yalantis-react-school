import { createContext } from "react";

export const ProductContext = createContext({
  setShoppingCart: () => { },
  shoppingCart: []
})