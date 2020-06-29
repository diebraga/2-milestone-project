import { createContext } from 'react';

interface Repository {
  full_name: string;
  description: string;
}
const RepoContext = createContext<Repository>({} as Repository);

export default RepoContext;
