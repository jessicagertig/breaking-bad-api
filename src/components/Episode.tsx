import { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useGetRandomEpisodeQuery } from '@/services/apiService';
import { RefetchHandle } from '@/types';
import DisplayData from './DisplayData';

interface EpisodeProps {}

const Episode = forwardRef<RefetchHandle, EpisodeProps>((props, ref) => {
  const { data, refetch, error, isLoading } = useGetRandomEpisodeQuery();

  useImperativeHandle(ref, () => ({
    refetchQuery: () => refetch()
  }));

  useEffect(() => {
    const scrollPosition = window.pageYOffset;
    const scrollToPosition = scrollPosition === 0 ? window.innerHeight : scrollPosition + (window.innerHeight - scrollPosition);
    if (data) {
      setTimeout(() => window.scrollTo({ top: scrollToPosition, behavior: 'smooth' }), 100)
    }

  }, [data])

  if (isLoading) {
    return <div>Loading Episode...</div>
  }
  
  const formattedData = data ? JSON.stringify(data, null, 2)
    .replace(/"(\w+)":/g, '"<span>$1</span>":') : '';

  //Example to be overwritten by actual component
  return (
    <DisplayData>
      <h1>Episode</h1>
      <pre dangerouslySetInnerHTML={{__html: formattedData}}></pre>
    </DisplayData>
  )
})

Episode.displayName = 'Episode';

export default Episode
