import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { getProviders, signIn } from 'next-auth/react';
import { ClientSafeProvider, LiteralUnion } from 'next-auth/react/types';
import { BuiltInProviderType } from 'next-auth/providers';

interface LoginProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

const Login = ({ providers }: LoginProps): ReactElement => {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img src="https://links.papareact.com/9xl" alt="" className="w-52 mb-5" />
      <p className="text-white">I am the staging</p>

      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: '/',
              })
            }
            className="bg-[#18d860] text-white p-5 rounded-full">
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
};
