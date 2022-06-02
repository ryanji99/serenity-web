import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <h1 className="text-center text-5xl uppercase text-light">
          404 - Page not found!
        </h1>
      </div>
    </Layout>
  );
};
export default NotFoundPage;
