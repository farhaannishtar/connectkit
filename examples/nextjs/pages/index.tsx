import type { NextPage } from 'next';
import { ConnectKitButton } from 'connectkit';

// initial commit

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <ConnectKitButton />
      <div>
        <h1 className="flex border-2 border-fuchsia-600">ConnectKit</h1>
      </div>
    </div>
  );
};

export default Home;
