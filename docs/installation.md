---
sidebar_position: 1
sidebar_label: Installation
---
# Okovision 2023
You will find below the documentation for Okovision 2023.

## A bit of history

This project has been originally built by [Stawen Dronek](https://github.com/stawen/okovision) but the developper stopped contributing and archived the project in 2020.
After getting a Pellematic Compact, I noticed it was possible to connect it with a RJ45 and also that we could access to some logfiles through its own IP address.
So I eventually found the githbub project of Okovision but it wasn't working on my system because some dependencies were too old and the code was not up to date.
That's where I cloned the project and thought, maybe I can update it, the code looked understandable to me. 

> And there we are!
---
## Installation
Okovision is a local webserver that you can run wherever you want.
It will need:
 - Apache2
 - MariaDB
 - PHP 8.2
 - The website data to download from [github](https://github.com/Domotrique/okovision_2023/releases)

I recommand to have it running on a **Raspberry pi**, it doesn't require a lot of performance or memory.

---
### Automatic installation
#### Run this command on linux

```bash
sudo wget https://raw.githubusercontent.com/Domotrique/okovision_2023/master/install/Okovision_2023_for_Linux.sh \
      && sudo chmod +x Okovision_2023_for_Linux.sh \
      && sudo ./Okovision_2023_for_Linux.sh \
      && sudo rm -f Okovision_2023_for_Linux.sh
```
This will download an installation script and run it before deleting it.

---
### Manual Installation
 
#### 1. Base tools
 
```bash
sudo apt-get update -y
sudo apt-get install -y ca-certificates curl wget gnupg lsb-release unzip
```
 
#### 2. PHP 8.2 on Debian 11 (bullseye only)
 
On Debian 11, PHP 8.2 is not available in the official repositories — you need to add the Sury repository:
 
```bash
curl -fsSL https://packages.sury.org/php/apt.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/sury.gpg
echo "deb https://packages.sury.org/php/ bullseye main" | sudo tee /etc/apt/sources.list.d/sury-php.list
sudo apt-get update -y
```
 
> On Debian 12 / Ubuntu 22.04+, this step is not needed.
 
#### 3. MariaDB database
 
 > ⚠️ **Warning**: Don't forget to change your password after completing the installation
```bash
sudo apt-get install -y mariadb-server
sudo systemctl enable --now mariadb
 
sudo mysql -e "CREATE DATABASE IF NOT EXISTS \`okovision\` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;"
sudo mysql -e "CREATE USER IF NOT EXISTS 'okouser'@'localhost' IDENTIFIED BY 'okopass';"
sudo mysql -e "GRANT ALL PRIVILEGES ON \`okovision\`.* TO 'okouser'@'localhost'; FLUSH PRIVILEGES;"
```
 
#### 4. Apache2 web server + PHP 8.2
 
```bash
sudo apt-get install -y apache2
sudo a2enmod rewrite
sudo systemctl enable --now apache2
 
sudo apt-get install -y php8.2 php8.2-cli php8.2-common libapache2-mod-php8.2 \
  php8.2-mysql php8.2-mbstring php8.2-xml php8.2-curl \
  php8.2-gd php8.2-intl php8.2-zip
 
sudo systemctl restart apache2
```
 
#### 5. OkoVision files
 
```bash
cd /var/www/
 
# Backup existing install if present
[ -d "okovision" ] && sudo mv okovision "$(date +"%y-%m-%d")_okovision"
 
sudo wget -O okovision.zip https://github.com/domotrique/okovision_2023/archive/refs/heads/master.zip
sudo unzip -q okovision.zip
sudo mv okovision_2023-master okovision
sudo rm okovision.zip
sudo chown -R www-data:www-data okovision/
```
 
#### 6. Apache configuration
 
```bash
sudo cp /var/www/okovision/install/099-okovision.conf /etc/apache2/sites-available/
sudo a2ensite 099-okovision.conf
sudo a2dissite 000-default || true
sudo systemctl reload apache2
```
 
#### 7. Cron job (hourly collection)
 
The cron fetches boiler data at minute 22 of every hour.
 
```bash
PHP_BIN="$(command -v php)"
CRONLINE="22 */1 * * * cd /var/www/okovision; ${PHP_BIN} -f cron.php"
( sudo crontab -l 2>/dev/null | grep -v "okovision; .*cron.php" || true; echo "$CRONLINE" ) | sudo crontab -
```

---
## Connect your boiler
If you didn't connect your boiler yet, here are the steps: [Connect Boiler](connection)

---
## Open Okovision and start setup
Open your browser and go to [http://localhost](http://localhost) (or your machine's IP address).