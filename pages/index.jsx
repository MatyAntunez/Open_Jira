import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Typography } from '@mui/material'
import { Layout } from '@/components/layouts/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='Open Jira App'>
      <Typography variant='h1' color='primary'>Hola mundo</Typography>
    </Layout>
  )
}
