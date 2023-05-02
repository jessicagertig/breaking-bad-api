import { forwardRef, useImperativeHandle } from 'react';
import { useGetRandomEpisodeQuery } from '@/services/apiService';
import { RefetchHandle } from '@/types';

interface EpisodeProps {}

const Episode = forwardRef<RefetchHandle, EpisodeProps>((props, ref) => {
  const { data, refetch, error, isLoading } = useGetRandomEpisodeQuery();

  useImperativeHandle(ref, () => ({
    refetchQuery: () => refetch()
  }));

  if (isLoading) {
    return <div>Loading Episode...</div>
  }
  
  //Example to be overwritten by actual component
  return (
    <div>
      <h1>Episode</h1>
      <h2>{data?.production}</h2>
      <h3>{data?.title}</h3>
    </div>
  )
})

Episode.displayName = 'Episode';

export default Episode
