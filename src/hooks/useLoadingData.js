import { useState, useEffect } from 'react'

const useLoadingData = (services, attribute = null) => {
  const [data, setData] = useState([]);

  const loadData = (services, attribute) => {
    services(attribute)
      .then(res => {
        setData(res);
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    loadData(services, attribute)
  }, [attribute])

  return data
}

export default useLoadingData
