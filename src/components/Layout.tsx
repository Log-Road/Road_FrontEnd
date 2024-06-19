import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
   return (
      <Container>
         <Header />
         <Content>
            <Outlet />
         </Content>
      </Container>
   );
};

const Container = styled.div``;

const Content = styled.div`
   height:  92vh;
`;

