import { createContext, useState, useContext, useEffect } from "react";

//crating Context
const AddToLikesCtx = createContext({
  //initial  Values
  favorites: [],
  totalfavorites: 0,
  addFavorite: (favoriteProduct) => {},
  removeFavorite: (productId) => {},
  itemIsFavorite: (productId) => {},
});

// ****   component    *****

const AddToLikesCtxProvider = ({ children }) => {
  const getLocalStorge = () => {
    let favorites = localStorage.getItem("favoritesProduct");
    try {
      if (favorites) {
        return JSON.parse(localStorage.getItem("favoritesProduct"));
      } else {
        return [];
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [userFavorites, setUserFavorites] = useState(getLocalStorge);

  useEffect(() => {
    localStorage.setItem("favoritesProduct", JSON.stringify(userFavorites));
  }, [userFavorites]);

  //adding

  const AddFavoriteHandler = (favoriteProduct) => {
    return setUserFavorites((prevUserFavorite) => {
      //taking the past value as prev
      return prevUserFavorite.concat(favoriteProduct); //concat is like push but return new array
    });
  };

  //removing

  const RemoveFavoriteHandler = (productId) => {
    return setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.filter((product) => productId !== product.id); //filter returns new array // true for keeping flase for redding
    });
  };
  //boolean of is favorite or not
  const ItemIsFavoriteHandler = (productId) => {
    return userFavorites.some((product) => product.id === productId); //if there is some product with that id it gives us true
  };

  const context = {
    favorites: userFavorites, //sending the values to components
    totalFavorites: userFavorites.length, //lentgh of the state
    addFavorite: AddFavoriteHandler,
    removeFavorite: RemoveFavoriteHandler,
    itemIsFavorite: ItemIsFavoriteHandler,
  };

  return (
    <AddToLikesCtx.Provider value={context}>{children}</AddToLikesCtx.Provider>
  );
};

// ****   end of component    *****

export const useFavorites = () => {
  return useContext(AddToLikesCtx);
};

export default AddToLikesCtxProvider;
