import React from 'react';
import styled from 'styled-components';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCardWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShoeCardWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  `;
const ShoeCardWrapper = styled.div`
  flex: 1 1 300px;
`

export default ShoeGrid;
