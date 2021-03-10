import { AppProps } from 'next/app';
import 'src/styles/global.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
