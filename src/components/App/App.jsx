// JS/JSX Components:
import Container from '../Container/Container';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import ProductImg from '../ProductImg/ProductImg';

// Images, stylesheets and other media:
import imgProductDesktop from '../../assets/images/image-product-desktop.jpg';
import './App.css'

const App = () => {
  return (
    <>
      <Container>
        <ProductImg src={imgProductDesktop} href="Foto do eau de parfum" />
        <PurchaseForm></PurchaseForm>
      </Container>
    </>
  );
}

export default App;