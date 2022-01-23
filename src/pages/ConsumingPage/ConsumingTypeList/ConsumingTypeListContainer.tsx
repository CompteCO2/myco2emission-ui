import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import config from "config/consuming_types.json";
import { useRootStore } from "providers/RootStoreProvider";
import ConsumingTypeList from "./ConsumingTypeList";
import { ConsumingTypeItem } from "./ConsumingTypeListItem/ConsumingTypeListItem";

const ConsumingTypeListContainer = observer((): JSX.Element => {
  const { carbonFootprintStore } = useRootStore();
  const [items, setItems] = useState<ConsumingTypeItem[]>([]);

  // set proportion
  useEffect(() => {
    setItems(
      config.items.reduce((acc, item) => {
        acc.push({
          proportion: carbonFootprintStore.proportion[item.id],
          ...item,
        });

        return acc;
      }, [] as ConsumingTypeItem[])
    );
  }, []);

  return <ConsumingTypeList types={items} />;
});

export default ConsumingTypeListContainer;
