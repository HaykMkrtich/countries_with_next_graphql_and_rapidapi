import CenterBlock from '@components/common/CenterBlock';
import { useQuery } from '@apollo/client';
import { COUNTRIES_QUERY } from '@graphql/query';

interface HomePageProps {}
export default function HomePage(props: HomePageProps): JSX.Element {
  const { data, loading, error, refetch } = useQuery(COUNTRIES_QUERY);
  console.log('data', data);
  console.log('error', error);
  if (loading) {
    return <CenterBlock>Loading ...</CenterBlock>;
  }
  if (error) {
    return <CenterBlock>Oops! there is an error</CenterBlock>;
  }
  return <CenterBlock>content here</CenterBlock>;
}
