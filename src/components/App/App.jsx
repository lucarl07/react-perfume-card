// JS/JSX Components:
import Container from '../Container/Container';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import ProductImg from '../ProductImg/ProductImg';
import FOTitle from '../FOTitle/FOTitle';

// Images, stylesheets and other media:
import imgProductDesktop from '../../assets/images/image-product-desktop.jpg';
import './App.css'
import Paragraph from '../Paragraph/Paragraph';

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
        </PurchaseForm>
      </Container>
    </>
  );
}

export default App;