import React from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'
import { Container, Wrapper,Section, Logo,Link, Main } from './style'
import logoImg  from '../../assets/icons/logo.png'
import { navbar } from '../../utils/navbar'
import Button from '../Generic/Button'
const Navbar = () => {
   
  const navigate = useNavigate()

 

  return (
    <Container>
      <Main>
      <Wrapper>
        <Section onClick={()=>navigate('/home')} logo >
          <Logo src={logoImg} />
        </Section>
        <Section>
          {
            navbar.map(({title,path,hidden},index)=>{
              return !hidden && <Link className={(isActive)=>isActive && 'active'}  key={index}  to={path}>{title}</Link>
            })
          }
        </Section>
        <Section>
          <Button type={"dark"} onclick={()=>{navigate('/signin')}} >Sign in</Button>
        </Section>
      </Wrapper>
      </Main>
      <Outlet/>
    </Container>
  )
}

export default Navbar