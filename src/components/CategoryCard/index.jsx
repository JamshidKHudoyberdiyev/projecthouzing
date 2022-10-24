import { Container, Content, Details, Img, Icons, Divider } from './style';
import noimg from '../../assets/imgs/img3.png';
import categoryimg from '../../assets/imgs/category.png'
import { Blur } from './style';

export const CategoryCard = ({ data = {}, gap, onClick }) => {
  const {
    category,
  } = data;
  return (

      <Container gap={gap}>
        <Img src={ categoryimg || noimg} />
      <Blur/>
        <Content>
          { category || "Category Name"}
        </Content>

      </Container>
    
  );
};

export default CategoryCard;
