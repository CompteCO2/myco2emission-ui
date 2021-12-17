import { observer } from "mobx-react";

import { useRootStore } from "providers/RootStoreProvider";
import { FliesList } from "./FliesList";

export const FliesListContainer = observer((): JSX.Element => {
  const { flyStore } = useRootStore();
  console.log(flyStore.flies)

  return <FliesList flies={flyStore.flies} />;
});
