import React, { useState } from 'react';
import styled from 'styled-components';

interface GreatBtnProps {
   initialColor?: 'red' | 'default';
}

const StyledButton = styled.button`
   width: 18px;
   background: none;
   border: none;
   cursor: pointer;
   padding: 0;
   display: flex;
   align-items: center;
   justify-content: center;

   &:focus {
      outline: none;
   }

   
`;

const getColor = (color: 'red' | 'default') => {
   switch (color) {
      case 'red':
         return '#FF0000';
      case 'default':
      default:
         return '#D1D1D1';
   }
};

export default function GreatBtn({ initialColor = 'default' }: GreatBtnProps) {
   const [color, setColor] = useState<'red' | 'default'>(initialColor);

   const handleClick = () => {
      setColor(prevColor => (prevColor === 'default' ? 'red' : 'default'));
   };

   return (
      <>
      <Flex>
         <StyledButton onClick={handleClick}>
            <svg width="18" height="16" viewBox="0 0 20 18" fill={getColor(color)} xmlns="http://www.w3.org/2000/svg">
               <path d="M0 6.24451C0 11.1075 4.02 13.6985 6.962 16.0185C8 16.8365 9 17.6075 10 17.6075C11 17.6075 12 16.8375 13.038 16.0175C15.981 13.6995 20 11.1075 20 6.24551C20 1.38251 14.5 -2.06649 10 2.60951C5.5 -2.06749 0 1.38151 0 6.24451Z" />
            </svg>
         </StyledButton>
         <Count>0</Count>
      </Flex>
      </>
   );
};

const Flex = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
`

const Count = styled.p`
   padding-top: 2px;
   color: #D1D1D1;
   font-size: 0.78rem;
`