import React from "react";
import {
    FooterContainer,
    FooterWrapper,
    Nav,
    NavLink,
    SocialMediaIcon,
    SocialMediaIcons
} from "./FooterStyle";
import {Bio} from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Nav>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#contacts">Contacts</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.linkedin} target="display">
                        <LinkedInIcon style={{width: '37px', height: '37px'}}/>
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.github} target="display">
                        <GitHubIcon style={{width: '33px', height: '33px'}}/>
                    </SocialMediaIcon>
                </SocialMediaIcons>

            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;