'use client'
import React, { useState } from 'react'
import { Avatar, Box, Card, Typography, TextField, Select, MenuItem, Button, Switch, FormControl, InputLabel, FormControlLabel, IconButton, Divider, Grid, CardContent } from '@mui/material'
import { motion } from 'framer-motion'
import { FaLinux, FaServer, FaApache } from 'react-icons/fa'
import { AiOutlineLink, AiOutlineDelete } from 'react-icons/ai'
import { IoCheckmarkDoneCircle, IoCloseCircle } from 'react-icons/io5'
import { TiPlus } from 'react-icons/ti'
import { SiApache } from 'react-icons/si'
function page() {
  const [domains, setDomains] = useState([
    {
      domainName: '',
      selectedDNS: '.app.pwtech.pw',
      isLive: false,
    },
  ])
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  const handleDomainChange = (index, e) => {
    const updatedDomains = [...domains]
    updatedDomains[index].domainName = e.target.value
    setDomains(updatedDomains)
  }

  const handleDNSChange = (index, e) => {
    const updatedDomains = [...domains]
    updatedDomains[index].selectedDNS = e.target.value
    setDomains(updatedDomains)
  }

  const handleSwitchLive = (index, e) => {
    const updatedDomains = [...domains]
    updatedDomains[index].isLive = e.target.checked
    setDomains(updatedDomains)
  }

  const handleAddDomain = () => {
    setDomains([
      ...domains,
      {
        domainName: '',
        selectedDNS: '.app.pwtech.pw',
        isLive: false,
      },
    ])
  }

  const handleRemoveDomain = (index) => {
    const updatedDomains = domains.filter((_, i) => i !== index)
    setDomains(updatedDomains)
  }
  const apacheData = {
    title: 'APACHE',
    version: 'Server version: Apache/2.4.37 (AlmaLinux)',
    builtDate: 'Aug 12 2024 02:30:19',
  };

  return (
    <>
      <Box sx={{ padding: 4, backgroundColor: 'white', borderRadius: 2 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Card
            sx={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: 3,
              padding: 3,
              marginBottom: 3,
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
                      width: 70,
                      height: 70,
                      marginRight: 2,
                    }}
                  >
                    <FaLinux size={35} />
                  </Avatar>
                </motion.div>

                <Box>
                  <Typography
                    variant="h5"
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
                    padding: '12px 20px',
                    borderRadius: '25px',
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

        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" sx={{ marginBottom: 3, color: '#2c3e50' }}>
            Create DNS
          </Typography>
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 * index }}
            >
              <Card
                sx={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: 2,
                  boxShadow: 2,
                  marginBottom: 2,
                  padding: 2,
                  marginTop: 3,
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column', // Flex direction set to column
                  justifyContent: 'space-between', // This ensures that the button stays at the bottom
                  height: '410px', // Give a fixed height to the card to maintain layout
                }}
              >
                {/* Delete Icon */}
                {index !== 0 && (
                  <IconButton
                    onClick={() => handleRemoveDomain(index)}
                    sx={{
                      color: 'red',
                      backgroundColor: 'white',
                      alignSelf: 'end',
                      marginBottom: 3,
                      '&:hover': { backgroundColor: '#f5f5f5' },
                    }}
                  >
                    <AiOutlineDelete />
                  </IconButton>
                )}

                {/* Domain Name Input */}
                <TextField
                  placeholder="Domain Name"
                  value={domain.domainName}
                  onChange={(e) => handleDomainChange(index, e)}
                  fullWidth
                  sx={{ marginBottom: 2 }}
                  variant="outlined"
                />
                <Typography style={{ marginTop: 3, marginLeft: 8 }}>
                  <strong>Username:</strong> Use the first part of the domain (e.g., for example.com, use example).
                </Typography>
                <Typography style={{ marginTop: 3, marginLeft: 8 }}>
                  <strong>Note:</strong> Please enter only the domain name. Do not write the full domain.
                </Typography>
                <Typography style={{ marginTop: 3, marginLeft: 8, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IoCheckmarkDoneCircle style={{ color: '#27ae60' }} size={19} />
                  <strong style={{ color: '#27ae60' }}>Right:</strong> Pwtech
                </Typography>
                <Typography style={{ marginTop: 3, marginLeft: 8, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IoCloseCircle style={{ color: 'red' }} size={19} />
                  <strong style={{ color: 'red' }}>Wrong:</strong> Pwtech.dev.pwtech.pw
                </Typography>

                <FormControl fullWidth sx={{ marginBottom: 2, marginTop: 5 }}>
                  {domain.selectedDNS.length === 0 && (
                    <InputLabel
                      shrink={!!domain.selectedDNS}
                    >
                      Choose DNS
                    </InputLabel>
                  )}
                  <Select
                    value={domain.selectedDNS}
                    onChange={(e) => handleDNSChange(index, e)}
                    label={!!domain.selectedDNS ? "" : "Choose DNS"}
                  >
                    <MenuItem value=".app.pwtech.pw">.app.pwtech.pw</MenuItem>
                    <MenuItem value=".applive.pwtech.pw">.applive.pwtech.pw</MenuItem>
                  </Select>
                </FormControl>


                {/* Live Mode Switch */}
                <FormControlLabel
                  control={<Switch checked={domain.isLive} onChange={(e) => handleSwitchLive(index, e)} />}
                  label="Enable Live Mode"
                  sx={{ marginBottom: 3 }}
                />

                {/* "Add Domain" button only in the last domain card */}
                {index === domains.length - 1 && (
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      width: '140px',
                      fontSize: '1rem',
                      padding: '12px',
                      borderRadius: '10px',
                      boxShadow: 2,
                      '&:hover': {
                        backgroundColor: '#2980b9',
                      },
                    }}
                    onClick={handleAddDomain}
                  >
                    <TiPlus style={{ marginLeft: 5 }} />
                    Add Domain
                  </Button>
                )}
              </Card>
            </motion.div>
          ))}
        </Box>
        <Box>
          <Typography style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'orange'
          }}>
            Common Section
          </Typography>
          <Divider
            style={{
              borderRadius: 8,
              marginTop: 4,
              height: '4px',
            }}
          />
          <Box mt={2}>
            <Box style={{
              display: 'flex',
              gap: 3,
              alignItems: 'center',
              marginBottom: 3
            }}>
              <Switch />
              <Typography>
                Password is common for all domains?
              </Typography>
            </Box>
            <Typography style={{
              marginLeft: 5,
              marginBottom: 5
            }}>
              Password
            </Typography>
            <TextField
              placeholder="Domain Name"
              fullWidth
              sx={{ marginBottom: 2 }}
              variant="outlined"
            />
          </Box>

          <Box mt={2}>
            <Box style={{
              display: 'flex',
              gap: 3,
              alignItems: 'center',
              marginBottom: 3
            }}>
              <Switch />
              <Typography>
                PHP Version is common for all domains?
              </Typography>
            </Box>
            <Typography style={{
              marginLeft: 5,
              marginBottom: 5
            }}>
              PHP Version
            </Typography>
            <FormControl fullWidth>
              {selectedOption.length === 0 && (
                <InputLabel
                  shrink={!!selectedOption}
                >
                  Choose PHP Version
                </InputLabel>
              )}
              <Select
                value={selectedOption}
                onChange={handleChange}
              >
                <MenuItem value="5.4">5.4</MenuItem>
                <MenuItem value="5.6">5.6</MenuItem>
                <MenuItem value="7.0">7.0</MenuItem>
                <MenuItem value="7.1">7.1</MenuItem>
                <MenuItem value="7.2">7.2</MenuItem>
                <MenuItem value="7.3">7.3</MenuItem>
                <MenuItem value="7.4">7.4</MenuItem>
                <MenuItem value="8.0">8.0</MenuItem>
                <MenuItem value="8.1">8.1</MenuItem>
                <MenuItem value="8.2">8.2</MenuItem>
                <MenuItem value="8.3">8.3</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box mt={2}>
            <Box style={{
              display: 'flex',
              gap: 3,
              alignItems: 'center',
              marginBottom: 3
            }}>
              <Switch />
              <Typography>
                PHP Mode is common for all domains?
              </Typography>
            </Box>
            <Typography style={{
              marginLeft: 5,
              marginBottom: 5
            }}>
              PHP Mode
            </Typography>
            <FormControl fullWidth>
              {selectedOption.length === 0 && (
                <InputLabel
                  shrink={!!selectedOption}
                >
                  choose PHP Mode
                </InputLabel>
              )}
              <Select
                value={selectedOption}
                onChange={handleChange}
              >
                <MenuItem value="fcgid">fcgid</MenuItem>
                <MenuItem value="cgi">cgi</MenuItem>
                <MenuItem value="fpm">fpm</MenuItem>
                <MenuItem value="mode_php">mode_php</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box mt={2}>
            <Box style={{
              display: 'flex',
              gap: 3,
              alignItems: 'center',
              marginBottom: 3
            }}>
              <Switch />
              <Typography>
                SSL is common for all domains?
              </Typography>
            </Box>
            <Typography style={{
              marginBottom: 5,
              width: 160,
              borderRadius: 6,
            }}>
              <Switch />
              SSL Disabled
            </Typography>
          </Box>
        </Box>
        <Divider
          style={{
            borderRadius: 8,
            marginTop: 4,
            height: '4px',
          }}
        />
        <Button variant="contained"
          color="primary"
          sx={{
            width: '140px',
            fontSize: '1rem',
            marginTop: 5,
            padding: '12px',
            borderRadius: '10px',
            boxShadow: 2,
            '&:hover': {
              backgroundColor: 'red',
            },
          }}>Submit</Button>

        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Installed Software
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <SiApache size={50} color='#d32f2f' />
                    <Typography variant="h5" component="div" sx={{ ml: 2, fontWeight: 'bold', color: '#333' }}>
                      Apache Server
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.primary' }}>
                      Version:
                      <Typography variant="body1" sx={{ fontWeight: 400, color: 'text.secondary' }}>
                        Apache/2.4.37 (AlmaLinux)
                      </Typography>
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500, color: 'text.primary' }}>
                      Server Built:
                      <Typography variant="body1" sx={{ fontWeight: 400, color: 'text.secondary' }}>
                        Aug 12, 2024, 02:30:19
                      </Typography>
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1976d2' }}>
                      Status: Active
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#1976d2' }}>
                      Uptime: 5 days
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

            </Grid>
          </Grid>
        </Box>

      </Box>
    </>
  )
}

export default page
