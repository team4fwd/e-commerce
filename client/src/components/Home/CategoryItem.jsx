import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-wrap: break-word;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  @media only screen and (max-width: 1100px) {
    font-size: 32px;
    text-align: center;
    word-break: break-word;
    hyphens: manual;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #ffffffc9;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>
          <Link to='/products' className='route-link'>
            SHOP NOW
          </Link>
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
