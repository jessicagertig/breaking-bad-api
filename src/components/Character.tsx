import { forwardRef, useImperativeHandle } from 'react';
import { useGetRandomCharacterQuery } from '@/services/apiService'
import { RefetchHandle } from '@/types'

interface CharacterProps {}

const Character = forwardRef<RefetchHandle, CharacterProps>((props, ref) => {
  const { data, refetch, error, isLoading } = useGetRandomCharacterQuery();

  useImperativeHandle(ref, () => ({
    refetchQuery: () => refetch()
  }));
  
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
})

Character.displayName = 'Character';

export default Character