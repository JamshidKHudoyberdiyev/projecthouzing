import { Container, Content, Details, Img, Icons, Divider } from './style';
import noimg from '../../assets/imgs/img3.png';
import categoryimg from '../../assets/imgs/category.png'
import { Blur } from './style';

export const CategoryCard = ({ category, onClick }) => {
 
  return (

      <Container  onClick={onClick}>
        <Img src={ categoryimg || noimg} />
      <Blur/>
        <Content>
          { category || "Category Name"}
        </Content>

      </Container>
    
  );
};

export default CategoryCard;
