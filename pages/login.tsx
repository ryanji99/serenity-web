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
    <>
      {data?.login.errors && (
        <p className="text-red-500">{data.login.errors[0].message}</p>
      )}
      <form
        onSubmit={(e) => onSubmit(e)}
        className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
      >
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Username or Email Address
          </label>
          <input
            className="w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none focus:ring"
            id="identifier"
            type="text"
            placeholder="johndoe"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none focus:ring"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-xs text-gray-500">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Login;
