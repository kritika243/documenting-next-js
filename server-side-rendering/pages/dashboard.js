import { useState, useEffect } from 'react'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState(null)

  useEffect(() => {
    async function fetchDta() {
      const response = await fetch('http://localhost:4000/dashboard')
      const data = await response.json()
      setDashboardData(data)
      setIsLoading(false)
    }
    fetchDta()
  }, [])

  if (isLoading) {
    return <h2>Loading, please wait</h2>
  }
  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <h4>Posts = {dashboardData.posts}</h4>
        <h4>Likes = {dashboardData.likes}</h4>
        <h4>Comments = {dashboardData.comments}</h4>
        <h4>
          Followers and following = {dashboardData.followers} |
          {dashboardData.following}
        </h4>
      </div>
    </>
  )
}

export default Dashboard
