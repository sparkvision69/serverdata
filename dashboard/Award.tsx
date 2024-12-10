// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material'

// Icon Imports
import { RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri'
import { FiDownloadCloud, FiUploadCloud } from 'react-icons/fi'

const ServerStatus = () => {
  return (
    <Card className="relative">
      <CardContent className="flex flex-col gap-4 relative items-center">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Server Up Section */}
          <Grid item xs={5} className="flex flex-col items-center">
            <div className="flex items-center justify-center bg-green-200 p-3 rounded-xl shadow-lg">
              <FiUploadCloud size={32} color="green" />
            </div>
            <Typography variant="h6" className="mt-2">Servers Up</Typography>
            <Typography variant="h4" color="primary">180</Typography>
          </Grid>

          {/* Server Down Section */}
          <Grid item xs={5} className="flex flex-col items-center">
            <div className="flex items-center justify-center bg-red-200 p-3 rounded-xl shadow-lg">
              <FiDownloadCloud size={32} color="red" />
            </div>
            <Typography variant="h6" className="mt-2">Servers Down</Typography>
            <Typography variant="h4" color="error">12</Typography>
          </Grid>
        </Grid>

        {/* Actions and Image */}
        <Button size="small" variant="contained" className="mt-4">
          View Server Status
        </Button>

      </CardContent>
    </Card>
  )
}

export default ServerStatus
