import React from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'
import { Container, Wrapper,Section, Logo,Link } from './style'
import logoImg  from '../../assets/icons/logo.png'
import { navbar } from '../../utils/navbar'
const Navbar = () => {
   
  const navigate = useNavigate()

  return (
    <Container>
      <Wrapper>
        <Section onClick={()=>navigate('/home')} logo >
          <Logo src={logoImg} />
        </Section>
        <Section>
          {
            navbar.map(({title,path},index)=>{
              return <Link className={(isActive)=>isActive && 'active'}  key={index}  to={path}>{title}</Link>
            })
          }
        </Section>
        <Section><button>Sign In</button></Section>
      </Wrapper>
      <Outlet/>
    </Container>
  )
}

export default Navbar