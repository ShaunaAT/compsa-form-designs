import '../styles/global.css';
import FormProvider from '../context';

export default function App({ Component, pageProps }) {
    //return <Component {...pageProps} />;
    return (
      <FormProvider>
        <Component {...pageProps}></Component>
      </FormProvider>
    );
  }