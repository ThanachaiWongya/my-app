import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Footer from '@bam/legacy-components/footer';
import NavigationBar from '@bam/legacy-components/navbar';
import '@bam/legacy-components/styles.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Auto-detect namespace from route
  // /corporate → 'corporate', /npa → 'npa', /npl → 'npl', etc.
  const pathname = router.pathname || '/';
  const namespace = pathname.split('/')[1] || 'common';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        <NavigationBar locale="th" namespace={namespace} />
      </header>
      <main style={{ flex: 1 }}>
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer locale="th" />
      </footer>
    </div>
  );
}
