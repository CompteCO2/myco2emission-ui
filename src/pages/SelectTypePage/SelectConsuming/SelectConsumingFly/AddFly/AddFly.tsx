import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Radio, InputNumber, Space, Button } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Select, { SelectOption } from "components/Select/Select";
import WithLabel from "components/WithLabel/WithLabel";
import { Fly, FLY_CLASS } from "stores/consumptions/fly";

const Wrapper = styled.form`
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme.colors.styleColor1};

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
  }
`;

const Line = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    display: block;
  }
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

const InputFlyNumber = styled(InputNumber)`
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const schema = yup
  .object({
    destination: yup.string().required(),
    arrival: yup.string().required(),
  })
  .required();

const AddFly = ({
  airports,
  onAdd,
}: {
  airports: SelectOption[];
  onAdd: (data: Fly) => void;
}): JSX.Element => {
  const { control, handleSubmit, formState } = useForm<Fly>({
    defaultValues: {
      travelNumber: 1,
      destination: "",
      arrival: "",
      class: FLY_CLASS.ECONOM,
      type: 1,
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { t } = useTranslation();

  const onSubmit = (data: Fly) => {
    onAdd(data);
  };

  return (
    <Wrapper>
      <Line>
        <Cell>
          <WithLabel label={t("consuming.fly.departure")}>
            <Controller
              name="destination"
              control={control}
              render={({ field }) => (
                <DSelector
                  showSearch
                  dropdownMatchSelectWidth={400}
                  items={airports}
                  icon="/fly/fly1.svg"
                  {...field}
                />
              )}
            />
          </WithLabel>
        </Cell>
        <Cell>
          <WithLabel label={t("consuming.fly.arrival")}>
            <Controller
              name="arrival"
              control={control}
              render={({ field }) => (
                <ASelector
                  showSearch
                  dropdownMatchSelectWidth={400}
                  items={airports}
                  icon="/fly/fly1.svg"
                  {...field}
                />
              )}
            />
          </WithLabel>
        </Cell>
      </Line>
      <Line>
        <Cell>
          <WithLabel label={t("consuming.fly.class.name")} noBackground={true}>
            <Controller
              name="class"
              control={control}
              render={({ field }) => (
                <Radio.Group defaultValue="1" {...field}>
                  <Radio.Button value="1">
                    {t("consuming.fly.class.1")}
                  </Radio.Button>
                  <Radio.Button value="2">
                    {t("consuming.fly.class.2")}
                  </Radio.Button>
                </Radio.Group>
              )}
            />
          </WithLabel>
        </Cell>
        <Cell>
          <WithLabel label={t("consuming.fly.number")} noBackground={true}>
            <Controller
              name="travelNumber"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputFlyNumber min={1} max={999} {...field} />
              )}
            />
          </WithLabel>
        </Cell>
      </Line>
      <Line>
        <Cell>
          <WithLabel label={t("consuming.fly.way")} noBackground={true}>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Radio.Group {...field}>
                  <Space direction="vertical">
                    <Radio value={1}>{t("consuming.fly.type.1")}</Radio>
                    <Radio value={2}>{t("consuming.fly.type.2")}</Radio>
                  </Space>
                </Radio.Group>
              )}
            />
          </WithLabel>
        </Cell>
      </Line>
      <ButtonLine>
        <AddButton
          disabled={!formState.isValid}
          type="primary"
          shape="circle"
          onClick={handleSubmit(onSubmit)}
        >
          {t("consuming.fly.buttons.add")}
        </AddButton>
      </ButtonLine>
    </Wrapper>
  );
};

export default AddFly;
