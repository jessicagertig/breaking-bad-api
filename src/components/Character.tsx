import { forwardRef, useEffect, useImperativeHandle } from 'react';
import dynamic from 'next/dynamic';

import { useGetRandomCharacterQuery } from '@/services/apiService'
import { RefetchHandle } from '@/types'
import DisplayData from './DisplayData';

interface CharacterProps {}

const CharacterComponent = forwardRef<RefetchHandle, CharacterProps>((props, ref) => {
  const { data, refetch, error, isLoading } = useGetRandomCharacterQuery();

  useImperativeHandle(ref, () => ({
    refetchQuery: () => refetch()
  }));

  useEffect(() => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight * 0.8
    const scrollToPosition = scrollPosition === 0 ? windowHeight : scrollPosition + (windowHeight - scrollPosition);
    if (data) {
      setTimeout(() => window.scrollTo({ top: scrollToPosition, behavior: 'smooth' }), 100)
    }
  }, [data])
  
  if (isLoading) {
    return <div>Loading Character...</div>
  }

  const formattedData = data ? JSON.stringify(data, null, 2)
  .replace(/"(\w+)":/g, '"<span>$1</span>":') : '';

  //Example to be overwritten by actual component
  return (
    <DisplayData>
      <h1>Character</h1>
      <pre dangerouslySetInnerHTML={{__html: formattedData}}></pre>
    </DisplayData>
  )
})

const Character = dynamic(() => Promise.resolve(CharacterComponent), {
  ssr: false
})

CharacterComponent.displayName = 'CharacterComponent';

export default Character