import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useReactQuery = ({url , key}) => {
    const getData = async () => {
      let res = await axios.get(`https://fakestoreapi.com/${url}`)
      return res
    }
  const {data , isLoading} = useQuery({
    queryKey: [key],
    queryFn: getData,
    staleTime: 60 * 100 * 5
  })
  return {data , isLoading}
}

export default useReactQuery
