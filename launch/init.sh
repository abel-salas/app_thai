#!/bin/bash

DATE=`date +%Y-%m-%d`

echo "Buenos dias Thai, hoy va ha ser un gran dia!"

echo ""

echo "La fecha de hoy es $DATE."

echo ""


sudo docker-compose up -d

tar -zcvf /home/abel/Dropbox/EsteticaThai/db_$DATE.tar.gz /var/mongo/data

echo ""

echo "Hemos finalizado la copia de seguridad en Dropbox con fecha $DATE"

echo ""

echo "Recuerda que para poder cerrar el terminal deberas presionar Ctrl + C"

chromium-browser --kiosk http://localhost:8080
