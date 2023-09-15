import { Converter } from "./components/Converter/Converter";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const App = () => {
  return (
    <>
      <Header />
      <Converter />
      <Footer />
    </>
  );
};
