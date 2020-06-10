import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Form, Repositories, Error } from './styles';
import Button from '../../_components/button';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repos, setRepos] = useState<Repository[]>(() => {
    const storagedRepos = localStorage.getItem('@GithubExplorer:repositories');

    if (storagedRepos) {
      return JSON.parse(storagedRepos);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repos));
  }, [repos]);

  async function handleRepos(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Input Ex: "author/repository"');
      return;
    }

    try {
      const response = await api.get(`repos/${newRepo}`);

      const repository = response.data;

      setRepos([...repos, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Author or repository invalid!');
    }
  }
  return (
    <>
      <Title>Explore Github Repositories</Title>

      <Form hasError={!!inputError} onSubmit={handleRepos}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Search repository"
        />
        <Button type="submit">Submit</Button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repos.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
