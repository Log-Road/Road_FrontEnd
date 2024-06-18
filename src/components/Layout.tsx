import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
   return (
      <>
      <Container>
         <Header/>
         <Outlet/>
      </Container>
      </>
   );
};

const Container = styled.div``