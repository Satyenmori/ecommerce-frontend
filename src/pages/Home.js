import Navbar from "../features/navbar/Navbar";
import { ProductList } from "../features/product/components/ProductList";

function Home() {
  return (
    <>
      <Navbar>
        <ProductList />
      </Navbar>
    </>
  );
}

export default Home;
