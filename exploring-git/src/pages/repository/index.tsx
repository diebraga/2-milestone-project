import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft, FiStar } from 'react-icons/fi';
import { GoTelescope } from 'react-icons/go';
import api from '../../services/api';
import {
  Header,
  RepoInfo,
  Issues,
  Loading,
} from '../../_styles_css/repository/styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

export const Repository: React.FC = () => {
  const [repo, setRepo] = useState<Repository | null>(null);
  const [issue, setIssue] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepo(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssue(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <GoTelescope size={50} />
        <h1>Git_Finder</h1>
        <Link to="/">
          <FiChevronLeft size={20} />
          Back
        </Link>
      </Header>

      {repo ? (
        <RepoInfo data-testid="repoInfo">
          <header>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repo.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repo.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repo.open_issues_count}</strong>
              <span>issues</span>
            </li>
          </ul>
        </RepoInfo>
      ) : (
        <Loading>
          <p>Loading...</p>
        </Loading>
      )}
      <h2>
        <FiStar />
        &nbsp;
        {repo?.language}
      </h2>

      <Issues>
        {issue.map(issue => (
          <a key={issue.id} href={issue.html_url} target="blank">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
