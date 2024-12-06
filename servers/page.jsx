'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  FaLinux,
  FaWindows,
  FaCpanel,
  FaMicrochip,
  FaMemory,
  FaNetworkWired,
} from "react-icons/fa";
import { SiPlesk } from "react-icons/si";
import { MdSignalWifiOff, MdSignalWifi4Bar } from "react-icons/md";
import { Button, Card, CardContent, Typography, Box } from "@mui/material";
import { FiCpu, FiRadio } from "react-icons/fi";
import { HiCubeTransparent } from "react-icons/hi";

const servers = [
  {
    id: "190.160.100.51",
    publicIp: "192.168.100.245",
    os: "Linux",
    panel: "cPanel",
    cpu: "QEMU Virtual CPU version 2.5+",
    ram: "7.35 GB",
    status: "connected",
  },
  {
    id: "192.168.1.1",
    publicIp: "192.168.100.245",
    os: "Windows",
    panel: "Plesk",
    cpu: "Intel i7-9700K",
    ram: "16 GB",
    status: "disconnected",
  },
];

const ServerCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {servers.map((server, index) => (
        <motion.div
          key={server.id}
          className={`w-full ${
            server.status === "disconnected" ? "animate-pulse" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            delay: index * 0.3,
          }}
        >
          <motion.div
            animate={
              server.status === "disconnected"
                ? { scale: [1, 1.05, 1] }
                : { scale: 1 }
            }
            transition={{
              repeat: server.status === "disconnected" ? Infinity : 0,
              repeatType: "reverse",
              duration: 4,
            }}
          >
            <Card
              className={`relative shadow-lg rounded-xl overflow-hidden border-l-4 ${
                server.status === "connected"
                  ? "border-green-500"
                  : "border-red-500 shadow-red-500/50"
              }`}
              style={{
                height: "100%",
                boxShadow:
                  server.status === "disconnected"
                    ? "0px 4px 20px rgba(255, 0, 0, 0.5)"
                    : "0px 4px 20px rgba(0, 255, 0, 0.3)",
              }}
            >
              <Box
                className={`absolute top-4 flex items-center gap-2 px-3 py-1 rounded-full font-medium ${
                  server.status === "connected"
                    ? "bg-green-100 text-green-600 right-4 text-sm "
                    : "bg-red-100 text-red-600 right-2 text-[12px]"
                }`}
              >
                {server.status === "connected" ? (
                  <MdSignalWifi4Bar />
                ) : (
                  <MdSignalWifiOff />
                )}
                {server.status === "connected" ? "Connected" : "Disconnected"}
              </Box>

              <CardContent>
                <Box className="flex items-center justify-center mb-4">
                  <motion.div
                    className={`flex items-center justify-center w-28 h-28 rounded-full shadow-lg ${
                      server.os === "Linux"
                        ? "bg-green-50 shadow-green-200"
                        : "bg-blue-50 shadow-blue-200"
                    }`}
                  >
                    {server.os === "Linux" ? (
                      <FaLinux className="text-green-500 text-6xl" />
                    ) : (
                      <FaWindows className="text-blue-500 text-6xl" />
                    )}
                  </motion.div>
                </Box>

                <Box className="flex flex-col items-center gap-4 mb-6">
                  <Box className="flex items-center gap-2">
                    <FiRadio  className="text-gray-600 text-xl" />
                    <Typography variant="body2" className="text-gray-700">
                      <span className="font-medium">Public IP:</span> {server.publicIp}
                    </Typography>
                  </Box>
                  <Box className="flex items-center gap-2">
                    <FiRadio className="text-gray-600 text-xl" />
                    <Typography variant="body2" className="text-gray-700">
                      <span className="font-medium">Server ID:</span> {server.id}
                    </Typography>
                  </Box>
                  <Box className="flex items-center gap-2">
                    <FiCpu className="text-gray-600 text-xl" />
                    <Typography variant="body2" className="text-gray-700">
                      <span className="font-medium">CPU:</span> {server.cpu}
                    </Typography>
                  </Box>
                  <Box className="flex items-center gap-2">
                    <HiCubeTransparent className="text-gray-600 text-xl" />
                    <Typography variant="body2" className="text-gray-700">
                      <span className="font-medium">RAM:</span> {server.ram}
                    </Typography>
                  </Box>
                </Box>

                <Box className="flex justify-center mb-4">
                  {server.panel === "cPanel" ? (
                    <FaCpanel className="text-orange-500 text-6xl" />
                  ) : (
                    <SiPlesk className="text-blue-600 text-6xl" />
                  )}
                </Box>

                <Box className="flex justify-center">
                  <Button
                    variant="contained"
                    className={`w-40 ${
                      server.status === "connected"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    } text-white`}
                  >
                    Select Server
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServerCard;
