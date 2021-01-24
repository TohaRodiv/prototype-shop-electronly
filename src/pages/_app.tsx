import { AppProps } from "next/dist/next-server/lib/router/router";
import "@style/style.scss";
export default MyApp;


function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
	return <Component {...pageProps} />;
}