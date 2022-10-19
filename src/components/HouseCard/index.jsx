import { Card,  CardImg, CardInfo, Info, Rooms, Icon, Price } from "./style";
import React from "react";
import noimg from '../../assets/imgs/images.jfif'

const HouseCard = ({info,mr,mt,mb,ml}) => {
  // console.log(info);
  return (
    <Card 
    mr = {mr}
    mt = {mt}
    mb = {mb}
    ml = {ml}
    >
    
      <CardImg>
        <img src={noimg} alt="img" />
      </CardImg>
      <CardInfo>
        <Info.Header>
          <Info.Title>{info?.name} Category:{info?.category?.name}</Info.Title>
          <Info.Text>{info?.address} <br /> Category:{info?.category?.name}</Info.Text>
        </Info.Header>
        <Rooms>
          <Rooms.Item> 
            <Icon.bed />
            <Rooms.Info>{info?.houseDetails.beds || 0} Beds</Rooms.Info>
          </Rooms.Item>
          <Rooms.Item> 
            <Icon.bath />
            <Rooms.Info>{info?.houseDetails.bath || 0} Baths</Rooms.Info>
          </Rooms.Item>
          <Rooms.Item> 
            <Icon.car />
            <Rooms.Info>{info?.houseDetails.garage || 0} Garage</Rooms.Info>
          </Rooms.Item>
          <Rooms.Item> 
            <Icon.ruler />
            <Rooms.Info>{info?.houseDetails.area || 0}  Sq Ft</Rooms.Info>
          </Rooms.Item>
        </Rooms>
        <Info.Footer>
          <Price>
              <Price.Old>${info?.price||0}/month</Price.Old>
              <Price.Next>${info?.salePrice||0}/month</Price.Next>
          </Price>
          <Info.Footer.Icons>
            <Icon.resize/>
            <Icon.heart/>
          </Info.Footer.Icons>
        </Info.Footer>
      </CardInfo>
    </Card>
  );
};

export default HouseCard;
