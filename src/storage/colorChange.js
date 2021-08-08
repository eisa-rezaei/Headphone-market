import { createContext, useState, useContext } from "react";

const ColorChangeCtx = createContext({
  isBlue: {},
  isGold: {},
  isBlack: {},
  changeColorIsBlack: () => {},
  changeColorIsGold: () => {},
  changeColorIsBlue: () => {},
});

const ColorChangeCtxProvider = ({ children }) => {
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
    changeColorIsBlack: colorBlackHandler,
    changeColorIsGold: colorGoldHandler,
    changeColorIsBlue: colorBlueHandler,
  };

  return (
    <ColorChangeCtx.Provider value={context}>
      {children}
    </ColorChangeCtx.Provider>
  );
};

export const useColorChange = () => {
  return useContext(ColorChangeCtx);
};

export default ColorChangeCtxProvider;
