'use client';
import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Button, Grid } from '@mui/material';
import { FaServer, FaLinux } from 'react-icons/fa';
import { MdInfo, MdOutlineDeleteOutline, MdOutlineRestartAlt, MdRestartAlt } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { BsCloudArrowUpFill, BsDatabaseDown } from 'react-icons/bs';
import { TbLivePhoto, TbRefresh } from 'react-icons/tb';
import { GiWormMouth } from 'react-icons/gi';
import { SiRclone } from 'react-icons/si';

export default function ServerInfo() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Card
          sx={{
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: 3,
            padding: 3,
            marginBottom: 2,
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.3s ease-in-out',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Avatar
                  sx={{
                    backgroundColor: 'white',
                    color: '#f2a600',
                    width: 90,
                    height: 90,
                    marginRight: 2,
                  }}
                >
                  <FaLinux size={40} />
                </Avatar>
              </motion.div>

              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    color: '#2c3e50',
                  }}
                >
                  <FaServer size={20} style={{ marginRight: 8, color: '#e74c3c' }} />
                  <strong>Server: Demo Server For Testing</strong>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    color: '#7f8c8d',
                    marginTop: 0.5,
                  }}
                >
                  IP: 192.168.1.1
                </Typography>
              </Box>
            </Box>

            {/* Connect Section */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#27ae60',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  marginRight: 5,
                  color: 'white',
                  cursor: 'pointer',
                  boxShadow: 2,
                }}
              >
                <AiOutlineLink size={25} style={{ marginRight: 10 }} />
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white' }}>
                  Connect
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: 4,
            display: 'flex',
            borderRadius: 2,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              padding: 4,
              backgroundColor: 'white',
              width: '100%',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              marginTop: 3,
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#34495e' }}>
                  Manage Your Server
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: '#7f8c8d', marginBottom: 3 }}>
                Enhance your experience by managing DNS and Database configurations for your server in an intuitive way.
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4} sx={{ marginTop: 1, width: '100%' }}>
            {[
              {
                icon: <BsCloudArrowUpFill size={40} style={{ color: '#2ecc71' }} />,
                title: 'Create DNS',
                delay: 1.5,
              },
              {
                icon: <TbRefresh size={40} style={{ color: '#f39c12' }} />,
                title: 'Update DNS',
                delay: 1.8,
              },
              {
                icon: <MdOutlineDeleteOutline size={40} style={{ color: '#e74c3c' }} />,
                title: 'Delete DNS',
                delay: 2.1,
              },
              {
                icon: <BsDatabaseDown size={40} style={{ color: '#3498db' }} />,
                title: 'Create External Database',
                delay: 2.4,
              },
              {
                icon: <MdRestartAlt size={40} style={{ color: '#1ab6c7' }} />,
                title: 'Restart Service',
                delay: 2.7,
              },
              {
                icon: <TbLivePhoto size={40} style={{ color: '#db0f38' }} />,
                title: 'Create Live DNS',
                delay: 3.0,
              },
              {
                icon: <SiRclone size={40} style={{ color: '#eb0edc' }} />,
                title: 'Clone DNS',
                delay: 3.3,
              },
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: card.delay }}
                >
                  <Card
                    sx={{
                      padding: 3,
                      borderRadius: '20px',
                      boxShadow: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      height: 150,
                      alignItems: 'center',
                      flexDirection: 'column',
                      backgroundColor: '#ecf0f1',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    {card.icon}
                    <Typography sx={{ marginTop: 1, color: '#2c3e50', fontWeight: 'bold' }}>
                      {card.title}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>
    </>
  );
}
