import { Fly } from "stores/fly";

export const FliesListItem = ({ fly }: { fly: Fly }): JSX.Element => {
  return <>{fly.destination}</>;
};
