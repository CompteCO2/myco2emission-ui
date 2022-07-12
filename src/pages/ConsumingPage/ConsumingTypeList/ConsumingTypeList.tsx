import styled from "styled-components";

import ConsumingTypeListItem, {
  ConsumingTypeItem,
} from "./ConsumingTypeListItem/ConsumingTypeListItem";
import {
  CARBON_FOOTPRINT_MODULES,
  ModuleComputationMap,
} from "stores/carbonFootprint";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`;

const ConsumingTypeList = ({
  types,
  isModuleComputed,
}: {
  types: ConsumingTypeItem[];
  isModuleComputed: ModuleComputationMap;
}): JSX.Element => {
  return (
    <Wrapper>
      {types.map((type, key) => {
        return (
          <ConsumingTypeListItem
            type={type}
            isComputed={isModuleComputed[type.id as CARBON_FOOTPRINT_MODULES]}
            key={key}
          />
        );
      })}
    </Wrapper>
  );
};

export default ConsumingTypeList;
