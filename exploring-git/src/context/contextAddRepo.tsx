/* eslint-disable @typescript-eslint/camelcase */
import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface RepoCredentials {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface RepositoryContext {
  repository: string;
  repoAdd(credentials: RepoCredentials): Promise<void>;
}

export const RepoContext = createContext<RepositoryContext>(
  {} as RepositoryContext,
);

export const RepoProvider: React.FC = ({ children }) => {
  const repoAdd = useCallback(
    async ({ login, full_name, owner, avatar_url, description }) => {
      const response = await api.post<RepositoryContext>('repos', {
        login,
        full_name,
        owner,
        avatar_url,
        description,
      });

      console.log(response.data);
    },
    [],
  );
  return (
    <RepoContext.Provider value={{ repository: '', repoAdd }}>
      {children}
    </RepoContext.Provider>
  );
};
