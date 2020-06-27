import React, { useState, FormEvent, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GoTelescope } from 'react-icons/go';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Form, Repositories, Error, Header } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const inputRef = useRef(null);
  const [newRepo, setNewRepo] = useState('');
  const [isFocused, setIsFocused] = useState(false);
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
      setInputError('Invalid! input a repository');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

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
      <Header>
        <GoTelescope size={50} />
        <h1>Git_Finder</h1>
      </Header>

      <Title>Explore Github Repositories</Title>

      <Form
        isFocused={isFocused}
        hasError={!!inputError}
        onSubmit={handleRepos}
      >
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="<User name> / <Repository name>"
          ref={inputRef}
        />
        <button type="submit">Search</button>
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
