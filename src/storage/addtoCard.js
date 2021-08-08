import { useContext, useState, createContext, useEffect } from "react";
//crating the context

const AddToCardCtx = createContext({
  countProduct: {},
  cardProducts: [],
  addingProductCount: (product) => {},
  removingProductCount: (productId) => {},
  removingProduct: (product) => {},
  addingProduct: (product) => {},
  isInCard: () => {},
  productCountReSet: (number) => {},
});

//context provider component
const AddtoCardCtxProvider = ({ children }) => {
  //function of getting from localstorage
  const getLocalStorge = () => {
    let cardsProducts = localStorage.getItem("cardsProducts");
    try {
      if (cardsProducts) {
        return JSON.parse(localStorage.getItem("cardsProducts"));
      } else {
        return [];
      }
    } catch (err) {
      console.log(err);
    }
  };

  // states
  const [productCount, setProductCount] = useState(0);
  const [addedProduct, setAddedProduct] = useState(getLocalStorge);

  //adding to localStorage
  useEffect(() => {
    localStorage.setItem("cardsProducts", JSON.stringify(addedProduct));
  }, [addedProduct]);

  //adding count func
  const addingProductCountHandler = () => {
    setProductCount(productCount + 1);
  };

  //removing count func
  const removingProductCountHandler = () => {
    if (productCount > 0) {
      return setProductCount(productCount - 1);
    }
  };
  //adding func
  const removingProductHanlder = (productId) => {
    setAddedProduct((prev) => {
      return prev.filter((product) => product.id !== productId);
    });
  };
  //removing func
  const addingProductHanlder = (product) => {
    setAddedProduct((prev) => {
      return prev.concat(product);
    });
  };
  //boolean func
  const isInCardHandler = (productId) => {
    return addedProduct.some((product) => product.id === productId);
  };
  const reSetProductCount = (value) => {
    return setProductCount(value);
  };

  //context
  const context = {
    countProduct: productCount,
    addingProductCount: addingProductCountHandler,
    removingProductCount: removingProductCountHandler,
    removingProduct: removingProductHanlder,
    addingProduct: addingProductHanlder,
    isInCard: isInCardHandler,
    cardProducts: addedProduct,
    productCountReSet: reSetProductCount,
  };

  // jsx
  return (
    <AddToCardCtx.Provider value={context}>{children}</AddToCardCtx.Provider>
  );
};

//custom hook
export const useAddToCard = () => {
  return useContext(AddToCardCtx);
};

export default AddtoCardCtxProvider;
