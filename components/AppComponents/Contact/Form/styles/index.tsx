import styled from "styled-components";

const ContactFormRoot = styled.div`
  width: 320px;
  min-height: 365px;
  height: auto;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px 4px 6px 6px;

  z-index: 50;
  @media (min-width: 1024px) {
    width: 440px;
  }
`;

const ContactFormInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 5%;
`;

const ContactFormHeaderContainer = styled.div`
  width: 100%;
  color: #fff;
  background-color: ${(props) => props.theme.palette.primary.dark};
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px 4px 0px 0px;
  font-size: 25px;
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;

const ContactFormContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-right: 10%;
`;

interface ContactFormLayoutProps {
  children: React.ReactNode;
}

const ContactFormLayout = ({ children }: ContactFormLayoutProps) => {
  return (
    <ContactFormRoot>
      <ContactFormInnerContainer>
        <ContactFormHeaderContainer>Fale conosco</ContactFormHeaderContainer>
        <ContactFormContent>{children}</ContactFormContent>
      </ContactFormInnerContainer>
    </ContactFormRoot>
  );
};

export default ContactFormLayout;
