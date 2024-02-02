import NavBar from "../features/navbar/Navbar";
import { ProductDetail } from "../features/product/components/ProductDetail";


function ProductdetailPage(){
    return(<>
    <NavBar>
        <ProductDetail/>
    </NavBar>
    </>);
}

export default ProductdetailPage;