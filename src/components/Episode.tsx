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
    const windowHeight = window.innerHeight * 0.8
    const scrollToPosition = scrollPosition === 0 ? windowHeight : scrollPosition + (windowHeight - scrollPosition);
    let timer: ReturnType<typeof setTimeout>;
    if (data) {
      timer = setTimeout(() => window.scrollTo({ top: scrollToPosition, behavior: 'smooth' }), 100)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [data])

  if (isLoading) {
    return <div>Loading Episode...</div>
  }
  
  const formattedData = data ? JSON.stringify(data, null, 2)
    .replace(/"(\w+)":/g, '"<span>$1</span>":') : '';

  return (
    <DisplayData>
      <h1>Episode</h1>
      <pre dangerouslySetInnerHTML={{__html: formattedData}}></pre>
    </DisplayData>
  )
})

Episode.displayName = 'Episode';

export default Episode
