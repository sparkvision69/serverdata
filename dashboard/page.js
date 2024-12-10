import Grid from '@mui/material/Grid'
import Award from '@views/dashboard/Award'
import Transactions from '@views/dashboard/Transactions'
import WeeklyOverview from '@views/dashboard/WeeklyOverview'
import TotalEarning from '@views/dashboard/TotalEarning'
import DepositWithdraw from '@views/dashboard/DepositWithdraw'
import Table from '@views/dashboard/Table'

const DashboardAnalytics = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Award />
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Transactions />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <WeeklyOverview />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <TotalEarning />
      </Grid>
      <Grid item xs={12} width='100%'>
        <DepositWithdraw />
      </Grid>
      <Grid item xs={12}>
        <Table />
      </Grid>
    </Grid>
  )
}

export default DashboardAnalytics
