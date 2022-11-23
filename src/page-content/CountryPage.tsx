import { useQuery } from '@apollo/client';
import { COUNTRY_QUERY } from '@graphql/query';
import { useRouter } from 'next/router';
import CenterBlock from '@components/common/CenterBlock';

interface CountryPageProps {}
export default function CountryPage(props: CountryPageProps): JSX.Element {
  const router = useRouter();
  const { country } = router.query;
  const {
    data: { countryByAlpha2Code },
  } = useQuery(COUNTRY_QUERY, { variables: { alpha2code: country } });
  console.log('countryByAlpha2Code', countryByAlpha2Code);
  return <CenterBlock>{countryByAlpha2Code?.name}</CenterBlock>;
}
