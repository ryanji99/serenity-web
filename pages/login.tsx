import { DocumentNode, gql, useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement, useState } from 'react';
import Layout from '../components/Layout';
import { useAppDispatch } from '../hooks/reduxHooks';
import { loginAction } from '../src/features/auth/authSlice';

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
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [login, { data, loading, error }] = useMutation(LOGIN);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await login({
      variables: {
        data: {
          identifier,
          password,
        },
      },
    });

    if (!res.data.login.errors) {
      dispatch(loginAction(res.data.login.user));
      router.push('/');
    }
  };

  return (
    <div className="mx-auto grid w-full max-w-lg grid-cols-1 place-content-center items-center">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="rounded-md border-2 p-10 shadow-inner"
      >
        <h1 className="mb-8 text-center text-4xl font-bold uppercase text-light">
          Login
        </h1>
        {data?.login.errors && (
          <p className="mb-5 uppercase text-red-500">
            {data.login.errors[0].message}
          </p>
        )}
        <div className="flex flex-col">
          <label className="uppercase text-light" htmlFor="identifier">
            Username or Email Address
          </label>
          <input
            className="mt-1 rounded-md border-2 py-2 px-3 text-sm text-dark"
            type="text"
            id="identifier"
            placeholder="john@email.com"
            value={identifier}
            onChange={({ target: { value } }) => setIdentifier(value)}
          />
        </div>

        <div className="my-7 flex flex-col">
          <label className="uppercase text-light" htmlFor="password">
            Password
          </label>
          <input
            className="mt-1 rounded-md border-2 py-2 px-3 text-sm text-dark"
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </div>

        <input
          className="w-full cursor-pointer rounded-md bg-primary p-3 text-2xl uppercase text-dark"
          type="submit"
          value="Login"
        />
        <Link href="/forgotPass">
          <a className="mt-5 block text-right text-sm text-light">
            Forgot Password?
          </a>
        </Link>
      </form>
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Login;
