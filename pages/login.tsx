import { DocumentNode, gql, useMutation } from '@apollo/client';
import React, { ReactElement, useState } from 'react';
import Layout from '../components/Layout';

const LOGIN: DocumentNode = gql`
  mutation Login($data: LoginOptions!) {
    login(data: $data) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }
`;

const Login = ({}) => {
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [login, { data, loading, error }] = useMutation(LOGIN);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      variables: {
        data: {
          identifier,
          password,
        },
      },
    });
  };

  return (
    <div className="mx-auto max-w-lg">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="rounded-md border-2 p-20 shadow-inner"
      >
        <h1 className="mb-8 text-center text-4xl font-bold">Login</h1>
        {data?.login.errors && (
          <p className="mb-5 text-red-500">{data.login.errors[0].message}</p>
        )}
        <div className="flex flex-col">
          <label htmlFor="identifier">Username or Email Address</label>
          <input
            className="mt-1 rounded-md border-2 py-1 px-3"
            type="text"
            id="identifier"
            placeholder="john@email.com"
            value={identifier}
            onChange={({ target: { value } }) => setIdentifier(value)}
          />
        </div>

        <div className="my-5 flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="mt-1 rounded-md border-2 py-1 px-3"
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </div>

        <input
          className="w-full cursor-pointer rounded-md bg-primary p-3 text-2xl text-white"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Login;
