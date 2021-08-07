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
});

//context provider component
const AddtoCardCtxProvider = ({ children }) => {
  //default value useEffect
  useEffect(() => {
    const cardsProducts = getLocalStorger();
    setAddedProduct(cardsProducts);
  }, []);

  const [productCount, setProductCount] = useState(0);
  const [addedProduct, setAddedProduct] = useState([]);

  //adding to localStorage
  useEffect(() => {
    localStorage.setItem("cardsProducts", JSON.stringify(addedProduct));
  }, [addedProduct]);

  //function of getting from localstorage
  const getLocalStorger = () => {
    let cardsProducts = localStorage.getItem("cardsProducts");
    if (cardsProducts) {
      return JSON.parse(localStorage.getItem("cardsProducts"));
    } else {
      return [];
    }
  };

  const addingProductCountHandler = () => {
    setProductCount(productCount + 1);
  };

  const removingProductCountHandler = () => {
    if (productCount > 0) {
      return setProductCount(productCount - 1);
    }
  };

  const removingProductHanlder = (productId) => {
    setAddedProduct((prev) => {
      return prev.filter((product) => product.id !== productId);
    });
  };
  const addingProductHanlder = (product) => {
    setAddedProduct((prev) => {
      return prev.concat(product);
    });
  };
  const isInCardHandler = (productId) => {
    return addedProduct.some((product) => product.id === productId);
  };

  const context = {
    countProduct: productCount,
    addingProductCount: addingProductCountHandler,
    removingProductCount: removingProductCountHandler,
    removingProduct: removingProductHanlder,
    addingProduct: addingProductHanlder,
    isInCard: isInCardHandler,
    cardProducts: addedProduct,
  };

  return (
    <AddToCardCtx.Provider value={context}>{children}</AddToCardCtx.Provider>
  );
};

export const useAddToCard = () => {
  return useContext(AddToCardCtx);
};

export default AddtoCardCtxProvider;
