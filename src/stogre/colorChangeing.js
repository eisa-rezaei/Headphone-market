import { createContext, useState, useContext } from "react";

const ColorChangingCtx = createContext({
  isBlue: {},
  isGold: {},
  isBlack: {},
  colorIsBlack: () => {},
  colorIsGold: () => {},
  colorIsBlue: () => {},
});

export const ColorChangingCtxProvider = ({ children }) => {
  const [colors, setColors] = useState({
    isBlack: true,
    isGold: false,
    isBlue: false,
  });

  const colorBlackHandler = () => {
    setColors({
      isBlack: true,
      isGold: false,
      isBlue: false,
    });
  };
  const colorGoldHandler = () => {
    setColors({
      isBlack: false,
      isGold: true,
      isBlue: false,
    });
  };
  const colorBlueHandler = () => {
    setColors({
      isBlack: false,
      isGold: false,
      isBlue: true,
    });
  };
  const context = {
    isBlue: colors.isBlue,
    isGold: colors.isGold,
    isBlack: colors.isBlack,
    colorIs: colors,
    colorIsBlack: colorBlackHandler,
    colorIsGold: colorGoldHandler,
    colorIsBlue: colorBlueHandler,
  };

  return (
    <ColorChangingCtx.Provider value={context}>
      {children}
    </ColorChangingCtx.Provider>
  );
};

export const useColorChanging = () => {
  return useContext(ColorChangingCtx);
};

export { ColorChangingCtx };
