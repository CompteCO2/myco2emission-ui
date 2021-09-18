import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { SelectOption } from "components/Select/Select";
import FoodTypeList from "./FoodTypeList/FoodTypeList";
import { Checkout } from "components/Checkout/Checkout";
import { useCallback } from "react";

const Wrapper = styled.div`
  width: 80%;
  margin: 4rem auto;

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 2rem auto;
  }
`;

const SelectConsumingFood = (): JSX.Element => {
  const { t } = useTranslation();
  const foodTypes = t("consumings.food.items", {
    returnObjects: true,
  }) as SelectOption[];

  const onCheckout = useCallback(() => {
    console.log('12');
  }, []);

  return (
    <Wrapper>
      <FoodTypeList types={foodTypes} />
      <Checkout onClick={onCheckout} />
    </Wrapper>
  );
};

export default SelectConsumingFood;
