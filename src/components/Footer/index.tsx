import React from "react";
import styled from "styled-components/macro";
import DiscordIcon from "assets/images/discord.png";
import InstagramIcon from "assets/images/instagram.png";
import MediumIcon from "assets/images/medium.png";
import TwitterIcon from "assets/images/twitter.png";
import TelegramIcon from "assets/images/telegram.png";
import YoutubeIcon from "assets/images/youtube.png";

const FooterContainer = styled.div`
  padding: 80px 16px;
  background: #0e131b;
  @media (min-width: 768px) {
    padding: 100px 32px;
  }

  @media (min-width: 1200px) {
    padding: 120px 48px;
  }

  @media (min-width: 1400px) {
    padding: 150px 64px;
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  color: white;
  margin-bottom: 24px;
  @media (min-width: 1200px) {
    font-size: 32px;
    margin-bottom: 48px;
  }
`;

const SocialIconContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 576px) {
    gap: 2rem;
  }

  @media (min-width: 768px) {
    gap: 3rem;
  }
`;

const SocialIconBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  ::before {
    position: absolute;
    top: -10px;
    left: 0;
    background-color: #58da9c;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  :hover {
    ::before {
      content: "";
    }
  }

  @media (min-width: 576px) {
    ::before {
      top: -12px;
      width: 10px;
      height: 10px;
    }
  }
`;

const SocialIcon = styled.img`
  width: auto;
  height: 28px;
  opacity: 0.5;

  @media (min-width: 768px) {
    height: 40px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Title>Join Us</Title>
      <SocialIconContent>
        <SocialIconBox>
          <a
            href="https://telegram.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={TelegramIcon} alt="telegram" />
          </a>
        </SocialIconBox>
        <SocialIconBox>
          <a
            href="https://twitter.com/?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={TwitterIcon} alt="twitter" />
          </a>
        </SocialIconBox>
        <SocialIconBox>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={DiscordIcon} alt="discord" />
          </a>
        </SocialIconBox>
        <SocialIconBox>
          <a
            href="https://www.instagram.com/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={InstagramIcon} alt="instagram" />
          </a>
        </SocialIconBox>
        <SocialIconBox>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={YoutubeIcon} alt="youtube" />
          </a>
        </SocialIconBox>
        <SocialIconBox>
          <a
            href="https://medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={MediumIcon} alt="medium" />
          </a>
        </SocialIconBox>
      </SocialIconContent>
    </FooterContainer>
  );
};

export default Footer;
