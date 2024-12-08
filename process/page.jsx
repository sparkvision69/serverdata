'use client';
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, CircularProgress, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { ThreeDot } from 'react-loading-indicators';

const terminalStyle = {
  background: 'linear-gradient(145deg, #1e1e1e, #252525)',
  color: '#00FF00',
  padding: '20px',
  borderRadius: '10px',
  fontFamily: 'Courier New, Courier, monospace',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
  width: '65%',
  height: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflowY: 'auto',
  position: 'relative',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px',
  marginBottom: 10,
  zIndex: 10,
};

const buttonStyle = {
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: '#FF5F57',
  cursor: 'pointer',
};

const buttonYellowStyle = {
  ...buttonStyle,
  backgroundColor: '#FFBD2E',
};

const buttonGreenStyle = {
  ...buttonStyle,
  backgroundColor: '#27C93F',
};

const MyModal = () => {
  const [currentCommand, setCurrentCommand] = useState(null);
  const [executedCommands, setExecutedCommands] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [scale, setScale] = useState(1); // State to control the scaling effect

  const commands = [
    { id: 1, command: "virtualmin create-dns --domain <domain_name> --name <record_name> --type <record_type> --value <record_value>", commandname: "Create DNS Record" },
    { id: 2, command: "echo '<?php echo \"Hello, World!\"; ?>' > /home/<username>/public_html/index.php", commandname: "Create User index.php File" },
    { id: 3, command: "sudo apt-get update && sudo apt-get upgrade -y", commandname: "Update System Packages" },
    { id: 4, command: "npm install express --save", commandname: "Install Express Framework" },
    { id: 5, command: "git clone https://github.com/some/repo.git", commandname: "Clone Git Repository" },
    { id: 6, command: "docker pull nginx", commandname: "Pull Nginx Docker Image" },
    { id: 7, command: "python3 -m venv venv && source venv/bin/activate", commandname: "Create Virtual Environment" },
    { id: 8, command: "composer install", commandname: "Install Composer Dependencies" },
    { id: 9, command: "chmod +x /path/to/script.sh", commandname: "Make Script Executable" },
    { id: 10, command: "ssh user@host 'sudo reboot'", commandname: "Reboot Server" },
    { id: 11, command: "curl -X GET https://api.example.com/data", commandname: "API Request" },
    { id: 12, command: "docker-compose up -d", commandname: "Start Docker Containers" },
    { id: 13, command: "tar -czf archive.tar.gz /path/to/folder", commandname: "Create Tar Archive" },
  ];

  useEffect(() => {
    const executeCommands = async () => {
      for (let cmd of commands) {
        setCurrentCommand(cmd);
        setIsRunning(true);
        await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000 + 4000)); // Simulate execution time
        setExecutedCommands((prev) => [...prev, cmd]);
        setIsRunning(false);
      }
    };
    executeCommands();
  }, []);

  const handleDoneClick = () => {
    setScale(1.03); // Trigger the scale animation
    setTimeout(() => {
      setScale(1); // Reset the scale back to normal after the animation
    }, 100); // Duration of scaling effect
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#121212' }}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale, opacity: 1 }} // Apply the scale here
        transition={{ duration: 0.5 }}
        style={terminalStyle}
      >
        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'top', flexDirection: 'row' }}>
          <div style={buttonContainerStyle}>
            <div style={buttonStyle}></div>
            <div style={buttonYellowStyle}></div>
            <div style={buttonGreenStyle}></div>
          </div>

          <Typography
            variant="h6"
            style={{
              color: '#00FF00',
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: 'bold',
              alignSelf: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <ThreeDot variant="pulsate" color="#32cd32" size="small" />
            </Box>
            <Box style={{ marginLeft: '10px', textAlign: 'right', flexGrow: 1 }}>
              {currentCommand ? currentCommand.commandname : 'Initializing...'}
            </Box>
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={(executedCommands.length / commands.length) * 100}
          style={{ marginBottom: '10px', backgroundColor: '#333', height: '6px', borderRadius: '5px' }}
          color="secondary"
        />

        <Box style={{ flexGrow: 1, marginBottom: '20px', overflowY: 'auto', padding: '10px', scrollbarWidth: 'none' }}>
          {commands.map((cmd) => (
            <div key={cmd.id} style={{ marginBottom: '10px' }}>
              <span style={{ color: executedCommands.includes(cmd) ? '#00FF00' : '#AAAAAA' }}>
                {executedCommands.includes(cmd) ? (
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}>
                    <IoShieldCheckmarkSharp style={{ verticalAlign: 'middle', marginRight: '5px', color: '#00FF00' }} />
                    {cmd.commandname}
                  </motion.div>
                ) : cmd === currentCommand && isRunning ? (
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }}>
                    <CircularProgress size={16} style={{ color: '#FFFF00', marginRight: '5px' }} />
                    Running: {cmd.commandname}
                  </motion.div>
                ) : (
                  <span>{cmd.commandname}</span>
                )}
              </span>
            </div>
          ))}
        </Box>

        <Box style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
          <Button
            variant="contained"
            style={{
              background: 'linear-gradient(145deg, #ff416c, #ff4b2b)',
              color: 'white',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(255, 75, 43, 0.5)',
            }}
            onClick={handleDoneClick} // Trigger scaling animation on click
          >
            done
          </Button>
        </Box>
      </motion.div>
    </div>
  );
};

export default MyModal;
