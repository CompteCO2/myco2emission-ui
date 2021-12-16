import { createContext, ReactNode, useContext } from "react";
import { RootStore } from "stores";

let store: RootStore;

const StoreContext = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = "StoreContext";

export const useRootStore = (): RootStore => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
};

export const RootStoreProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const root = store ?? new RootStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
};
