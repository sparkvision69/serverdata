// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Type Imports
import type { ThemeColor } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

type DataType = {
  icon: string
  stats: string
  title: string
  color: ThemeColor
}

// Vars
const data: DataType[] = [
  {
    stats: '150',
    title: 'Servers',
    color: 'primary',
    icon: 'ri-server-line' // Icon for servers
  },
  {
    stats: '1200',
    title: 'Users',
    color: 'success',
    icon: 'ri-group-line' // Icon for users
  },
  {
    stats: '50',
    color: 'warning',
    title: 'DNS Entries',
    icon: 'ri-global-line' // Icon for DNS
  },
  {
    stats: '300',
    color: 'info',
    title: 'Companies',
    icon: 'ri-building-line' // Icon for companies
  }
]

const ServerStats = () => {
  return (
    <Card className='bs-full flex flex-col justify-between'>
      <CardHeader
        title='Server Statistics'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Refresh', 'Share', 'Update']} />}
        subheader={
          <p className='mt-5'>
            <span className='font-medium text-textPrimary'>Total 32% Growth 😎</span>
            <span className='text-textSecondary'>this quarter</span>
          </p>
        }
      />
      <CardContent className='!pbs-5'>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <div className='flex items-center gap-3'>
                <CustomAvatar variant='rounded' color={item.color} className='shadow-xs'>
                  <i className={item.icon}></i>
                </CustomAvatar>
                <div>
                  <Typography>{item.title}</Typography>
                  <Typography variant='h5'>{item.stats}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ServerStats
