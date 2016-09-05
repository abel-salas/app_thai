#!/bin/bash
################### Functions ####################
function copyDatabase(){
   tar -zcvf /home/abel/Dropbox/EsteticaThai/db_$DATE.tar.gz /var/mongo/data
   echo "Hemos finalizado la copia de seguridad en Dropbox con fecha $DATE"
}

function appStart() {
   cd $root_directory; 
   sudo docker-compose up -d; 
   # chromium-browser --kiosk http://localhost:8080
}

function appStop() {
   cd $root_directory; 
   sudo docker-compose stop;
}

function appLogs() {
   cd $root_directory; 
   sudo docker-compose logs;
}

function appRestart() {
   cd $root_directory; 
   sudo docker-compose restart;
}
##################################################


################### Variables ####################

dialog_title="CDmon's Panell de Gestió Interna"
root_directory="/home/projects/pgi_dev-environment/"
DATE=`date +%Y-%m-%d`

# Menu exit & cancel behavior
dialogcancel=1
dialogesc=255

# Trap and delete temp files
trap "exit" SIGHUP SIGINT SIGTERM
##################################################


##################### Main #######################
while true ; do
   exec 3>&1
   menuitem=$(dialog --clear --backtitle "${dialog_title}" \
   --title "[ MENU PGI ] [ Dia: ${DATE} ]" \
   --cancel-label "Exit" \
   --menu "Elige una tarea" 14 50 10 \
   Start "Start App" \
   Logs "Logs Containers" \
   Stop "Stop Containers" \
   Reload "Restart Containers" \
   Backup "Copia de seguridad de la base de datos" \
   2>&1 1>&3)
   exit_status=$?
   exec 3>&-
   case ${exit_status} in
      ${dialogcancel})
         clear
         echo "Program terminated." >&2
         exit
      ;;
      ${dialogesc})
         clear
         echo "Program aborted." >&2
         exit 1
      ;;
   esac
   case ${menuitem} in
      Start)  appStart;;
      Logs)   appLogs;;
      Stop)   appStop;;
      Reload) appStop && appStart;;
      Backup) copyDatabase;;
   esac
done
##################################################
