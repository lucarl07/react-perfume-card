// JS/JSX Components:
import Container from '../Container/Container';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import ProductImg from '../ProductImg/ProductImg';
import FOTitle from '../FOTitle/FOTitle';
import Paragraph from '../Paragraph/Paragraph';
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

// Images, stylesheets and other media:
import imgProductDesktop from '../../assets/images/image-product-desktop.jpg';
import iconCart from '../../assets/images/icon-cart.svg';
import './App.css'

const App = () => {
  return (
    <>
      <Container>
        <ProductImg src={imgProductDesktop} href="Foto do eau de parfum" />
        <PurchaseForm>
          <div className='titleWrapper'>
            <Paragraph className='productType'>
              Perfume
            </Paragraph>
            <FOTitle className="productName">
              Gabrielle Essence Eau De Parfum
            </FOTitle>
          </div>
          <Paragraph>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </Paragraph>
          <div className="productPrice">
            <FOTitle className="afterDiscount">
              $149.99
            </FOTitle>
            <Paragraph className='beforeDiscount'>
              $169.99
            </Paragraph>
          </div>
          <AddToCartBtn>
            <img src={iconCart} alt="Cart icon" />
            <span>Add to Cart</span>
          </AddToCartBtn>
        </PurchaseForm>
      </Container>
    </>
  );
}

export default App;