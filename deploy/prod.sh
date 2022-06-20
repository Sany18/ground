# npm run build
# rsync -azP ../build root@161.35.19.72:/root/pirat
# ssh root@161.35.19.72 "killall node ; serve /root/pirat/build"
ssh root@161.35.19.72 "serve"

echo
echo =======================================
echo ============== success ================
echo =======================================
