import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'windi.css'
import TodoProvider from '../context/context'


type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType;
  };
  TodoProvider():void
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
      Component.PageLayout ? (
        /* @ts-ignore */
        <Component.PageLayout>
          <TodoProvider >
            <Component {...pageProps} />
          </TodoProvider>
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )
    )
}

export default MyApp
