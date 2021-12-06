import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { map } from "rxjs/operators";
import { useEffect, useState } from "react";

import Select, { SelectOption } from "components/Select/Select";
import WithLabel from "components/WithLabel/WithLabel";
import { airports$ } from "subjects/airports";

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
    max-width: 10%;
    width: 10%;
  }

  .ant-select {
    width: 90%;
    overflow: hidden;
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
      <Selectors>
        <Line>
          <WithLabel label={t("consumings.fly.destination")}>
            <DSelector
              showSearch
              dropdownMatchSelectWidth={400}
              items={airports}
              icon="/fly/fly1.svg"
            />
          </WithLabel>
        </Line>
        <Line>
          <WithLabel label={t("consumings.fly.arrival")}>
            <ASelector
              showSearch
              dropdownMatchSelectWidth={400}
              items={airports}
              icon="/fly/fly1.svg"
            />
          </WithLabel>
        </Line>
      </Selectors>
    </Wrapper>
  );
};

export default AddFly;
