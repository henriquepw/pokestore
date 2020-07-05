import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { Container } from './styles';

const PurchaseApproved: React.FC = () => {
  return (
    <Container>
      <h1>
        <FaCheck size={64} />
        Purchase completed successfully
      </h1>
    </Container>
  );
};

export default PurchaseApproved;
