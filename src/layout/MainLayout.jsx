import { Navbar } from "../components";

// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <div>
        <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;