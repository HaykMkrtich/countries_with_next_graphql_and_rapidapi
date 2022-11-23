import Head from 'next/head';
import { useRouter } from 'next/router';
import CountryPage from '@app/page-content/CountryPage';

export default function Country() {
  const router = useRouter();
  const { country } = router.query;
  return (
    <>
      <Head>
        <title>Country - {country}</title>
      </Head>
      <CountryPage />
    </>
  );
}
