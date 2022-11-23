import CenterBlock from '@components/common/CenterBlock';
import { useQuery } from '@apollo/client';
import { COUNTRIES_QUERY } from '@graphql/query';
import Link from 'next/link';

interface HomePageProps {}
export default function HomePage(props: HomePageProps): JSX.Element {
  const { data, loading, error } = useQuery(COUNTRIES_QUERY);
  if (loading) {
    return <CenterBlock>Loading ...</CenterBlock>;
  }
  if (error) {
    return <CenterBlock>Oops! there is an error</CenterBlock>;
  }
  return (
    <CenterBlock>
      <ul>
        {data.countries.map((country: any) => (
          <Link key={`country_${country?.alpha2code}`} href={`/country/${country?.alpha2code}`}>
            <li>{country?.name}</li>
          </Link>
        ))}
      </ul>
    </CenterBlock>
  );
}
