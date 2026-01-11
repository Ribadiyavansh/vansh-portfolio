import { Routes, Route } from 'react-router-dom'
import Layout from '@/app/layout'
import HomePage from '@/app/page'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  )
}

export default App
