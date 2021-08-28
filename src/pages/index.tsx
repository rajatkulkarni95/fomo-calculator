import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import FormControl from "../components/Form";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>FOMO Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Imaginary Regret Calculator</Heading>
      <Subtitle>Also known as FOMO</Subtitle>
      <FormContainer>
        <FormControl />
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 48px;
  text-align: center;
  line-height: 1;
  margin-top: 36px;
  margin-bottom: 0;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.muted};
  font-size: 24px;
`;

const FormContainer = styled.section`
  margin: 48px;
  min-width: 600px;
  max-width: 900px;
  background: ${({ theme }) => theme.accent};
  border-radius: 6px;
`;

export default Home;
