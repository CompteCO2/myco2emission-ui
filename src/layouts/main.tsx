import LanguageSelector from "components/LanguageSelector/LanguageSelector";

const MainLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <LanguageSelector />
      {children}
    </>
  );
};

export default MainLayout;
