import { createContext, useContext, useState } from "react";
import { MyProjects } from "./data";

const PortfolioContext = createContext({ projects: null });

const ContextProvider = ({ children }) => {
  const [projects] = useState(MyProjects);

  return (
    <PortfolioContext.Provider value={{ projects }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default ContextProvider;

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};
