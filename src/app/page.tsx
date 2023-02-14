import { Roboto } from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function Home(): React.ReactElement {
  return (
    <main className={roboto.className}>
      <p>Hello</p>
      <h1>Hello World</h1>
    </main>
  );
}
