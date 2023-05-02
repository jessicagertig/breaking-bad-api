import { useGetRandomCharacterQuery } from '@/services/apiService';

interface CharacterProps {}

const Character = (props: CharacterProps) => {
  const { data, refetch, error, isLoading } = useGetRandomCharacterQuery();
  
  if (isLoading) {
    return <div>Loading Character...</div>
  }

  //Example to be overwritten by actual component
  return (
    <div>
      <h1>Character</h1>
      <h2>{data?.name}</h2>
      <h3>{data?.status}</h3>
    </div>
  )
}

export default Character