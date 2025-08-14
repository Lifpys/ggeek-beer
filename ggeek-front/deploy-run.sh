sudo tar -xzvf next-build.tar.gz

pm2 delete all
pm2 start npm --name "nextjs-app" -- start
