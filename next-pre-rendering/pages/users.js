import User from '../components/user'

// users - prop from getStaticProps returned object
const UserList = ({ users }) => {
  return (
    <>
      <h1>Users List</h1>
      {users.map((user) => (
        <div>
          <User user={user} />
        </div>
      ))}
    </>
  )
}

export default UserList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {
      users: data,
    },
  }
}
