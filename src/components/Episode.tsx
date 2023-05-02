import { useGetRandomEpisodeQuery } from '@/services/apiService';

interface EpisodeProps {}

const Episode = (props: EpisodeProps) => {
  const { data, refetch, error, isLoading } = useGetRandomEpisodeQuery();

  if (isLoading) {
    return <div>Loading Episode...</div>
  }
  
  return (
    <div>
      <h1>Episode</h1>
      <h2>{data?.production}</h2>
      <h3>{data?.title}</h3>
      <p>{data?.episode}</p>
    </div>
  )
}

export default Episode
