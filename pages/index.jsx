import { Inter } from 'next/font/google'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { Layout } from '@/components/layouts/Layout'
import { EntryList, NewEntry } from '@/components/ui'



export default function Home() {
  return (
    <Layout title='Home - Open Jira App'>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pendientes" />

            

              <NewEntry/>
              <EntryList status='pending'/>
            

          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En Progreso" />
            <EntryList status='in-progress'/>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completadas" />
            <EntryList status='finished'/>
          </Card>
        </Grid>



      </Grid>
    </Layout>
  )
}
