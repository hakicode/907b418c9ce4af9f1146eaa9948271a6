# 907b418c9ce4af9f1146eaa9948271a6
www
tabca
vn

# Deploy www.tabca.vn (nginx ubuntu)
sudo apt update
sudo apt install nginx -y
sudo apt install certbot python3-certbot-nginx -y
cd /var
git clone https://github.com/hakicode/907b418c9ce4af9f1146eaa9948271a6.git www.tabca.vn

# Host tabca.vn & Redirect to Host www.tabca.vn (nginx ubuntu)
cp /var/www.tabca.vn/nginx/www.tabca.vn.conf /etc/nginx/conf.d/
cp /var/www.tabca.vn/nginx/tabca.vn.conf /etc/nginx/conf.d/
nginx -s reload
sudo certbot --nginx -d www.tabca.vn -d tabca.vn

# Host www.tabca.vn (nginx ubuntu)
cp /var/www.tabca.vn/nginx/www.tabca.vn.conf /etc/nginx/conf.d/
nginx -s reload
sudo certbot --nginx -d www.tabca.vn

# Redirect tabca.vn to www.tabca.vn (nginx ubuntu)
cp /var/www.tabca.vn/nginx/tabca.vn.conf /etc/nginx/conf.d/
nginx -s reload
sudo certbot --nginx -d tabca.vn