import { useContext, useState, createContext, useEffect } from "react";

//crating the context

const AddToCardCtx = createContext({
  countProduct: {},
  cardProducts: [],
  addProductCount: (product) => {},
  removeProductCount: (productId) => {},
  removeProduct: (productId) => {},
  addProduct: (product) => {},
  isInCard: (productId) => {},
  countProductChange: (productId) => {},
  productCountReSet: (number) => {},
  totalCount: {},
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
      return [];
    }
  };

  // states
  const [productCount, setProductCount] = useState(0);
  const [addedProduct, setAddedProduct] = useState(getLocalStorge());
  const [totalCount, setTotalCount] = useState(0);

  const countProductChange = (productId) => {
    const product = addedProduct.filter((product) => product.id === productId);
    const newProduct = product[0];
    newProduct.count = productCount;
  };

  //adding to localStorage
  useEffect(() => {
    localStorage.setItem("cardsProducts", JSON.stringify(addedProduct));
  }, [addedProduct, countProductChange.newProduct]);

  //adding count func
  const addProductCountHandler = () => {
    setProductCount(productCount + 1);
  };

  //removing count func
  const removeProductCountHandler = () => {
    if (productCount > 0) {
      return setProductCount(productCount - 1);
    }
  };
  //adding func
  const removeProductHanlder = (productId) => {
    setAddedProduct((prev) => {
      return prev.filter((product) => product.id !== productId);
    });
  };
  //removing func
  const addProductHanlder = (product) => {
    setAddedProduct((prev) => {
      return prev.concat({ ...product, count: productCount });
    });
  };

  //boolean func
  const isInCardHandler = (productId) => {
    return addedProduct.some((product) => product.id === productId);
  };
  const reSetProductCount = (value) => {
    return setProductCount(value);
  };

  const setTotalCountHandler = (value) => {
    setTotalCount(value);
  };
  //context
  const context = {
    countProduct: productCount,
    addProductCount: addProductCountHandler,
    removeProductCount: removeProductCountHandler,
    removeProduct: removeProductHanlder,
    addProduct: addProductHanlder,
    isInCard: isInCardHandler,
    cardProducts: addedProduct,
    productCountReSet: reSetProductCount,
    countProductChange: countProductChange,
    setTotalCount: setTotalCountHandler,
    totalCount: totalCount,
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
