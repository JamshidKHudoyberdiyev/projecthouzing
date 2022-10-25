import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
import CategoryCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";


const { REACT_APP_BASE_URL: url } = process.env;


const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "1px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,
  
  appendDots: (dots) => <h1> {dots} </h1>,
};

export const Category = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch(`${url}/categories/list`)
    .then((res) => res.json())
    .then((res) => {
      setData(res?.data || []);
    });
  }, []);
  const navigate = useNavigate()
  // console.log(data);
  return (
    <Container>
      <Content>
        <h1 className="itle">Category</h1>
        <p className="subTitle">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <CategoryCard  onClick={()=>{navigate(`/proporties?category=${value.name}`)}} category={value.name} key={value.id}            
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Category;
