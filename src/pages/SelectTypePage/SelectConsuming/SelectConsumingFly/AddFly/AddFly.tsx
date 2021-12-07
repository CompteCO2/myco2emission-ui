import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { map } from "rxjs/operators";
import { Radio, InputNumber, Space, Button } from "antd";
import { useEffect, useState } from "react";

import Select, { SelectOption } from "components/Select/Select";
import WithLabel from "components/WithLabel/WithLabel";
import { airports$ } from "subjects/airports";

const Wrapper = styled.div`
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme.colors.styleColor1};
  margin-top: -1rem;

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: ${props => props.theme.colors.styleColor1};
    border-color: ${props => props.theme.colors.styleColor1};
  }

  .ant-radio-button-wrapper-checked:not([class*=" ant-radio-button-wrapper-disabled"]).ant-radio-button-wrapper:first-child {
    border-right-color: ${props => props.theme.colors.styleColor1};
  }

  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
    background-color: ${props => props.theme.colors.styleColor1};
  }

  .ant-radio-button-wrapper:hover {
    color: ${props => props.theme.colors.styleColor1};
  }
`;

const Selector = styled(Select)`
  > svg {
    height: 30px;
    max-width: 10%;
    width: 10%;
  }

  .ant-select {
    width: 90%;
    overflow: hidden;
  }
`;

const Line = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Cell = styled.div`
  width: 46%;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const DSelector = styled(Selector)`
  > svg {
    transform: rotateZ(-45deg) rotateX(45deg);
  }
`;

const AddButton = styled(Button)`
  background-color: ${props => props.theme.colors.styleColor3};
  padding: 0.5rem 2rem;
  border-radius: 25px;
  height: auto;
`;

const ASelector = styled(Selector)`
  > svg {
    transform: rotateX(45deg) rotateZ(45deg);
    position: relative;
    left: 0.2rem;
    top: 0.2rem;
  }
`;

const ButtonLine = styled(Line)`
  justify-content: right;
`;

const AddFly = (): JSX.Element => {
  const [airports, setAirports] = useState<SelectOption[]>([]);
  const { t } = useTranslation();

  // map airports to options.
  useEffect(() => {
    const airportsOptions$ = airports$.pipe(
      map(airports => {
        return airports.map(airport => {
          return {
            title: `${airport.name} ${airport.IATA}`,
            value: airport.IATA,
          };
        });
      })
    );

    airportsOptions$.subscribe(airports => {
      setAirports(airports);
    });
  }, []);

  return (
    <Wrapper>
      <Line>
        <Cell>
          <WithLabel label={t("consumings.fly.destination")}>
            <DSelector
              showSearch
              dropdownMatchSelectWidth={400}
              items={airports}
              icon="/fly/fly1.svg"
            />
          </WithLabel>
        </Cell>
        <Cell>
          <WithLabel label={t("consumings.fly.arrival")}>
            <ASelector
              showSearch
              dropdownMatchSelectWidth={400}
              items={airports}
              icon="/fly/fly1.svg"
            />
          </WithLabel>
        </Cell>
      </Line>
      <Line>
        <Cell>
          <WithLabel label={t("consumings.fly.class.name")} noBackground={true}>
            <Radio.Group defaultValue="a">
              <Radio.Button value="a">
                {t("consumings.fly.class.econom")}
              </Radio.Button>
              <Radio.Button value="b">
                {t("consumings.fly.class.business")}
              </Radio.Button>
            </Radio.Group>
          </WithLabel>
        </Cell>
        <Cell>
          <WithLabel label={t("consumings.fly.arrival")} noBackground={true}>
            <InputNumber min={1} max={999} defaultValue={1} />
          </WithLabel>
        </Cell>
      </Line>
      <Line>
        <Cell>
          <WithLabel label={t("consumings.fly.way.name")} noBackground={true}>
            <Radio.Group value={1}>
              <Space direction="vertical">
                <Radio value={1}>{t("consumings.fly.way.one")}</Radio>
                <Radio value={2}>{t("consumings.fly.way.round")}</Radio>
              </Space>
            </Radio.Group>
          </WithLabel>
        </Cell>
      </Line>
      <ButtonLine>
        <AddButton type="primary" shape="circle">
          {t("consumings.fly.buttons.add")}
        </AddButton>
      </ButtonLine>
    </Wrapper>
  );
};

export default AddFly;
