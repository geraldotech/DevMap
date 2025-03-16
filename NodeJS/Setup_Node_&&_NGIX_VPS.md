# Setting up Node && NGIX on EC2

1 - Open Windows Power Shell ou cmd

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

```

2 -

```bash
. ~/.nvm/nvm.sh

```

3 -

```bash
nvm install node

```

4 - check out node version

```bash
node -v
```

5 - check out npm (Node Package Manager)

```bash
npm -v
```

versão v.034.0 não funciona no Amazon Linux, contudo no Ubuntu Server works [https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)

# NGINX

> > Irá trabalhar como reverse proxy

- Install

```bash
sudo yum install nginx

// case No Package is available

sudo amazon-linux-extras install nginx1

```

- to remove

```bash
sudo yum remove nginx

```

- start

```bash
sudo service nginx start

```

- status

```bash
sudo service nginx status

```

<img src="./assets/img00001.PNG" style="width:0%">

# FileZila setup

SFTP, host, user, password: `<empty>`

<img src="./assets/img00002.PNG" loazing='lazy' style="width:50%">

Add key.pem

<img src="./assets/img00003.PNG" style="width:50%">

done! just connect.

Login via SSH directory => /var sudo mkdir nodeapp

<img src="./assets/img00004.PNG" style="width:50%">

set permission: `sudo chmod -R 777 nodeapp` e fazer o upload de todo o conteúdo

# Inbound rules

Abrir portas 3000 e 5000 ir em:

<img src="./assets/img00005.PNG" style="width:50%">

add

<img src="./assets/img00006.PNG" style="width:50%">

run app

<img src="./assets/img00007.PNG" style="width:65%">

.
<img src="./assets/img00008.PNG" style="width:50%">

PM2

gerenciador de processos

`npm install pm2@latest -g`

Checkout digite: `pm2`

<div style="text-align:center">
<img src="./assets/img00009.PNG" style="width:60%;"> 
</div>

How pm2: `cd /var/nodeapp`

pm start: `pm2 start index.js`

<img src="./assets/img00010.PNG" style="width:60%;">

Display window currently process:
`pm2 status`

Display real time process:
`pm2 log`

 <img src="./assets/img00011.PNG" style="width:60%;">

Stop `pm2 stop index.js`

# Nginx 

<details>
<summary>Nginx  reverse VPS in General [Updated 2024]</summary>


> as reverse intercept connection on specific ports and redirect them to different destinations based on your configuration.

1 - install nginx: `apt install nginx`


# Nginx comandos:

```js
apt update
// purge
apt remove --purge nginx*
apt autoremove


service nginx start
apt install nginx
systemclt restart nginx
service nginx restart
```

2 - open config nginx: `vi /etc/nginx/sites-available/default` or create your site conf `vim /etc/nginx/sites-enabled/appbr.conf`
> if default in `/etc/nginx/sites-available/` exists: `mv default to default2`

```js
   server {
        server_name apibr.gpdev.tech;
         location / {
       proxy_pass http://localhost:3001; #whatever port your app runs on

                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
         }
    }

```

3 - service is listening on specific port will be served by nginx, don't need specific folder

- create symbolic link `ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/`

4 - test nginx config `nginx -t`



## Node 18

-  Install Node 18 https://www.digitalocean.com/community/tutorials/install-uninstall-nodejs-ubuntu


## Github

- 1 - push to github
- 2 - VPS install git `apt install git`
- 3 - clone git repo - eg /var/www/html/myproject
- 4 - install dependences: `node install`
- 5 - run: `node app.js`


## pm2 

gerenciador de processos para o runtime JavaScript Node.js: `npm install pm2 -g`

  - inside project: `pm2 start app.js --name 'My project'`
  - list all projects: `pm2 list`
  - restart by project process ID (PID) of the application: `pm2 restart <pid>`
  - run a npm run dev app `pm2 start "npm run dev" --name crudsqlite`

  - you can access your project in: <IP>:yourport or your domain name

### Updating project

```js
pm2 stop <pid>
rm -rf <folder>
git clone  <project>
npm install <folder>
npm2 start <pid>
```

### Setup a domain name with a web server

</details>

<details>
<summary>How setup a new site server-blocks-virtual-hosts</summary>

```js
nano /etc/nginx/sites-available/crudnodesql.conf

create e new conf
server {
    server_name 143.198.232.51:4000  ; # Adicionar o seu domínio, tanto sozinho quanto com www.
    location / {
        proxy_pass http://localhost:4000; # Supondo que sua API esteja rodando na porta 4000
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
}
}
```

`ln -s /etc/nginx/sites-available/crudnodesql.conf /etc/nginx/sites-enabled/`

Next, check Nginx for any syntax error with the following command:

`nginx -t`

restat nginx

go to your sites folder mine is /var/www/html
git clone

cd ./-GIT-PROJECT

npm install

npm run dev

Now access: yours routers:
http://143.198.232.51:4000/

http://143.198.232.51:4000/pessoas

</details>

<details>
<summary>Setting default website and ssl</summary>

- vim /etc/nginx/sites-available/default

> no defaut acima de  #Virtual Host configuration:

```js
   server {
        server_name apibr.gpdev.tech www.apibr.gpdev.tech;
         location / {
       proxy_pass http://localhost:4444; #whatever port your app runs on

                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
         }
    }
```

- Não precisa de ln -s because default already exists in /etc/nginx/site-enabled/default
- nginx -t

- restart nginx

</details>

- Para liberar a porta 80 (Oracle) - `sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT` além de definir as regras no site.

## Certbot (https)

- A config depende muito da sua distro checkout => https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal

> delete
snap remove certbot
 rm -rf /etc/letsencrypt/
/snap/bin/certbot
 rm -rf /usr/bin/certbot

// search
 dpkg -l *certbot*

- restart nginx - https://phoenixnap.com/kb/nginx-start-stop-restart
- analyze ssl test - https://www.ssllabs.com/ssltest/analyze.html?d=api.geraldox.com&latest

## ufw [firewall](https://linuxize.com/post/how-to-setup-a-firewall-with-ufw-on-ubuntu-18-04/#open-port-443-https)

