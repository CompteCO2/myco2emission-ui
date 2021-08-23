const SelectConsuming = ({
  title,
  tip,
}: {
  title: string;
  tip: string;
}): JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{tip}</p>
    </div>
  );
};

export default SelectConsuming;
