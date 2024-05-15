import styled from 'styled-components'

const AddToCartBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 45px;
  border: none;
  border-radius: 8px;
  color: var(--white);
  background-color: var(--dark-cyan);
  font-weight: 700;
  font-size: var(--p-size);
  transition: 50ms linear;

  &:hover {
    cursor: pointer;
    background-color: hsl(158, 36%, 24%);
  }
`;

export default AddToCartBtn;