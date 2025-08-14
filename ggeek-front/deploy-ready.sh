


sudo rm -rf .next
sudo npm run build

tar -czvf next-build.tar.gz .next package.json next.config.ts deploy-install.sh deploy-run.sh public

# tar -xzvf next-build.tar.gz

# sudo bash deploy-install.sh
# sudo bash deploy-run.sh