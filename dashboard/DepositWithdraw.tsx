// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

// Component Imports
import Link from '@components/Link'

const InstallScript = () => {
  return (
    <Card>
      <CardHeader
        title="Install Linux Socket Script"
        subheader="Follow these simple steps to install and run the Linux Socket Script on your server."
      />
      <CardContent>
        <Grid container spacing={4}>
          {/* Installation Command */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" className="mb-2">
              Download and run the installation script:
            </Typography>
            <Typography
              variant="body2"
              className="bg-gray-100 p-3 rounded font-mono text-sm text-primary"
              component="div"
            >
              curl -sL http://serveradminpanel.live.pwtech.pw:4000/download/main_script | bash
            </Typography>
          </Grid>

          {/* Installation Steps */}
          <Grid item xs={12}>
            <Typography variant="h6" className="mb-2">
              Installation Steps:
            </Typography>
            <ul className="list-disc pl-5">
              <li>
                If <strong>Node.js</strong> is not installed, it will automatically install Node.js 20.
              </li>
              <li>
                If <strong>PM2</strong> is not installed, it will install PM2.
              </li>
              <li>
                This script will run the server script with PM2 under the name <strong>pwtech_socket</strong>.
              </li>
              <li>
                Ensures your environment is properly set up and running.
              </li>
            </ul>
          </Grid>

          {/* Action Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              >
              Run Installation Script
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default InstallScript
