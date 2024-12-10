'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

// Icon Imports
import { RiWindowsLine } from 'react-icons/ri'
import { DiLinux } from 'react-icons/di'

const DownloadWindowsScript = () => {
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        title="Download Linux Script"
        subheader="Note: Make the script executable by running chmod +x install_project.sh. Execute the script with sudo ./install_project.sh."
        
      />
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          {/* Windows Icon */}
          <div className="flex justify-center items-center bg-blue-100 p-4 rounded-full">
            <DiLinux size={64} color={theme.palette.primary.main} />
          </div>

          {/* Instruction Text */}
          <Typography variant="body1" align="center">
          This script will configure your environment and ensure everything is set up for your project.
          </Typography>

          {/* Download Button */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="http://serveradminpanel.live.pwtech.pw:4000/download/windows_script"
            download
          >
            Download Script
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default DownloadWindowsScript
