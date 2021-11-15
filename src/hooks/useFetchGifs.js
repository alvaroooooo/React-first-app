import React, {useState} from 'react'

// Custom hook
export const useFetchGifs = () => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });
  
  setTimeout( () => 
    setState({
      data: [1,2,3,4],
      loading: false
    }), 2000)
  
  return state
}
