#!/bin/bash

# Script to set up Next.js v20 project with Node.js and npm

# 1. Update and upgrade system packages
echo "Updating and upgrading system packages..."
sudo apt-get update -y && sudo apt-get upgrade -y

# 2. Install curl if not installed
echo "Checking for curl..."
if ! command -v curl &> /dev/null
then
    echo "curl not found, installing..."
    sudo apt-get install -y curl
else
    echo "curl is already installed"
fi

# 3. Install Node.js (NodeSource repository for the latest LTS version)
echo "Installing Node.js v18.x..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 4. Verify Node.js and npm installation
echo "Verifying Node.js and npm versions..."
node -v
npm -v

# 5. Install build-essential if not installed (optional but recommended for building dependencies)
echo "Checking for build-essential..."
if ! dpkg -s build-essential &> /dev/null
then
    echo "Installing build-essential..."
    sudo apt-get install -y build-essential
else
    echo "build-essential is already installed"
fi

# 6. Install PM2 globally to keep the app running in the background (optional)
echo "Installing PM2..."
sudo npm install -g pm2

echo "Installing project dependencies..."
npm install

