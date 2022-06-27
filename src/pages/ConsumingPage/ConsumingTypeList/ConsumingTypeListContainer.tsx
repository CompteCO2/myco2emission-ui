import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import config from "config/consuming_types.json";
import { useRootStore } from "providers/RootStoreProvider";
import ConsumingTypeList from "./ConsumingTypeList";
import { ConsumingTypeItem } from "./ConsumingTypeListItem/ConsumingTypeListItem";

const ConsumingTypeListContainer = observer((): JSX.Element => {
  const { carbonFootprintStore } = useRootStore();
  const [items, setItems] = useState<ConsumingTypeItem[]>([]);

  // set proportion and value.
  useEffect(() => {
    const items = config.items.reduce((acc, item) => {
      acc.push({
        value: carbonFootprintStore.modules[item.id]?.emission ?? 0,
        average: carbonFootprintStore.modules[item.id]?.average ?? 0,
        proportion: carbonFootprintStore.proportion[item.id],
        ...item,
      });

      return acc;
    }, [] as ConsumingTypeItem[]);

    setItems(items);
  }, []);

  return (
    <ConsumingTypeList
      types={items}
      isComputed={carbonFootprintStore.isComputed}
    />
  );
});

export default ConsumingTypeListContainer;
