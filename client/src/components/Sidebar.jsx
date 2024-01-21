import React from 'react'
import styled from 'styled-components';
import { HomeRounded, CloseRounded, SearchRounded, FavoriteRounded, CloudUploadRounded, LogoutRounded, LightModeRounded } from "@mui/icons-material";
import LogoImage from "../images/logo-dark.png";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
flex : 0.5;
flex-direction : column;
height : 100vh;
display : flex;
background-color : ${({ theme }) => theme.bg};
color : ${({ theme }) => theme.text_primary}
`;

const Logo = styled.div`
width : 100%;
color : ${({ theme }) => theme.primary};
display : flex;
align-items : center;
justify-content : center;
gap : 6px;
font-weight : bold;
font-size : 20px;
margin : 16px 16px;
`;

const Elements = styled.div`
padding : 4px 16px;
display : flex;
gap : 12px;
flex-direction : row;
justify-content : flex-start;
align-items : center;
cursor : pointer;
color : ${({ theme }) => theme.text_secondary};
width : 100%;
&:hover {
    background-color : ${({ theme }) => theme.primary};
}

`;
const NavText = styled.div`
padding : 12px 0px;
text-decoration : none;
`;

const Close = styled.div``;

const Flex = styled.div`
display : flex;
flex-direction : row;
align-items : center;
justify-content : center;
`;

const Image = styled.img`
width : 25px;
`;

const HR = styled.div`
width : 100%;
height : 1px;
background-color : ${({ theme }) => theme.text_secondary};
margin : 10px 0px
`;

const MenuItems = [

    {
        link : "/", 
        name : "Dashboard",
        icon : <HomeRounded />
    },

    {
        link : "/search", 
        name : "Search",
        icon : <SearchRounded />
    },

    {
        link : "/fav", 
        name : "Favorites",
        icon : <FavoriteRounded />
    },
]

const Buttons = [

    {
        fun : () =>  console.log("upload"),
        name : "Upload",
        icon : <CloudUploadRounded />
    },

    {
        fun : () =>  console.log("Light Mode and Dark Mode"),
        name : "Light Mode",
        icon : <LightModeRounded />
    },

    {
        fun : () =>  console.log("Login and Logout"),
        name : "Logout",
        icon : <LogoutRounded />
    }

]

function Sidebar() {
  return (
    <div>
      <MenuContainer>
        <Flex>

        <Logo>
            <Image src={LogoImage} />uStream</Logo>
        <Close>
            <CloseRounded />
        </Close>
        </Flex>

        {MenuItems.map((item) => (

            
        <Link to={item.link} key={item.link}>
        <Elements>
            {item.icon}
            <NavText> {item.name} </NavText>
        </Elements>
        </Link>
        ))}

        <HR />

{Buttons.map((item) => (
            
<Elements onClick={item.fun}>
    {item.icon}
    <NavText> {item.name} </NavText>
</Elements>
))}
      </MenuContainer>
    </div>
  )
}

export default Sidebar;
