import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FaGithub } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import getValidationErrors from '../../_utils/getValidErrors';
import api from '../../services/api';

import { Container, Repositories } from './styles';

import Input from '../../_components/input';
import Button from '../../_components/button';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: []) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('required'),
      });
      console.log(data);

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);

      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <>
      <Container>
        <FaGithub size={100} />
        &nbsp;
        <strong>Exploring_Git</strong>
        <h1>Explore repositories on Github</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
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
