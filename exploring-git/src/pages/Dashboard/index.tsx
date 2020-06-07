import React from 'react';
import { Form } from '@unform/web';
import { FaWpexplorer } from 'react-icons/fa';

import { Container } from './styles';

import Input from '../../_components/input';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <FaWpexplorer />
        Exploring_Git
        <h1>Weather where you are</h1>
        <form>
          <Input name="name" placeholder="name" />
        </form>
      </Container>
    </>
  );
};

export default Dashboard;
