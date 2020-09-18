import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Navbar from '../components/Navbar';
import Card from '../components/Card';

const QUERY = gql`
  {
    getJobList {
      items {
        _id
        title
        body
        hotJob
        company {
          name
        }
      }
    }
  }
`;

const JobBoard = () => {
  const { loading, data } = useQuery(QUERY);

  return (
    <div>
      <Navbar />
      {loading ? <h1>Loading...</h1> : <Card allJobs={data} />}
    </div>
  );
};

export default JobBoard;
