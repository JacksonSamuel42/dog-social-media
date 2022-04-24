import React from 'react'
import { STATS_GET } from '../../Api/Api'
import Head from '../../Helpers/Head'
import useFetch from '../../Hooks/useFetch'
import Loading from '../../Helpers/Loading'
import Error from '../../Helpers/Error'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const {data, error, request, loading} = useFetch()

  React.useEffect(() => {
    const getData = async() => {
      const token = window.localStorage.getItem('token')
      const {url, options} = STATS_GET(token)
      await request(url, options)
    }

    getData()
  }, [request])

  if(loading) return <Loading/>
  if(error) return <Error error={error}/>
  if(data)
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatística"/>
      <UserStatsGraphs data={data}/>
    </React.Suspense>
  )
  else return null
}

export default UserStats