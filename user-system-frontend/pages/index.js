import Head from 'next/head'
import NavBar from '../components/NavBar'
import UserList from '../components/UserList'

export default function Home() {
  return (
    <div>
      <Head>
        <title>User System</title>
      </Head>

      <NavBar />

      <main>
        <UserList />
      </main>

    </div>
  )
}
