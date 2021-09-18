import styled from "styled-components";

import Select from "components/Select/Select";
import WithLabel from "components/WithLabel/WithLabel";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid ${props => props.theme.colors.styleColor1};
  margin-top: -1rem;
`;

const Selectors = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

const Selector = styled(Select)`
  > svg {
    height: 30px;
    width: 40px;
  }
`;

const Line = styled.div`
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

const ASelector = styled(Selector)`
  > svg {
    transform: rotateX(45deg) rotateZ(45deg);
    position: relative;
    left: 0.2rem;
    top: 0.2rem;
  }
`;

const AddFly = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Selectors>
        <Line>
          <WithLabel label={t("consumings.fly.destination")}>
            <DSelector items={[]} icon="/fly/fly1.svg" />
          </WithLabel>
        </Line>
        <Line>
          <WithLabel label={t("consumings.fly.arrival")}>
            <ASelector items={[]} icon="/fly/fly1.svg" />
          </WithLabel>
        </Line>
      </Selectors>
    </Wrapper>
  );
};

export default AddFly;
