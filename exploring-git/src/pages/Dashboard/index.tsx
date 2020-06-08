import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FaGithub } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../services/api';

import { Container, Repositories } from './styles';

import Input from '../../_components/input';
import Button from '../../_components/button';

const Dashboard: React.FC = () => {
  const handleSubmit = useCallback(async (data: []) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('required'),
      });

      await schema.validate(data, {
        abortEarly: true,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <Container>
        <FaGithub size={100} />
        &nbsp;
        <strong>Exploring_Git</strong>
        <h1>Explore repositories on Github</h1>
        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Repository name" />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>

      <Repositories>
        <Link to="/">
          <img
            src="https://avatars2.githubusercontent.com/u/52054459?s=460&u=d4c512846e9d96d98c2da4eeb1c9906691461b80&v=4"
            alt="Diego"
          />
          <div>
            <strong>diebraga</strong>
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Repositories>
    </>
  );
};

export default Dashboard;
