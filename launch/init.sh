#!/bin/bash
################### Functions ####################
function appStart() {
   cd $root_directory;
   sudo docker-compose up -d;
   sleep 10;
   chromium-browser --kiosk http://localhost:8080;
}

function appStop() {
   cd $root_directory;
   sudo docker-compose stop;
   killall chromium-browser
}

function appLogs() {
   cd $root_directory;
   sudo docker-compose logs;
}

function appRemove() {
   cd $root_directory;
   sudo docker-compose down;
}

function backupDb(){
    cd $root_directory;
    tar -zcvf /home/abel/Dropbox/EsteticaThai/db_$DATE.tar.gz /var/mongo/data
}
##################################################


################### Variables ####################

DATE=`date +%Y-%m-%d`

dialog_title="CDmon's Panell de Gestió Interna"
root_directory="/home/app_thai/launch/"

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
   --title "[ MENU APP THAI ] - [ $DATE ]" \
   --cancel-label "Salir" \
   --menu "Elige una tarea" 14 50 10 \
   Start "Encender la aplicacion" \
   Stop "Apagar la aplicacion" \
   Backup "Copia de seguridad de la base de datos" \
   Restart "Reiniciar la aplicacion" \
   Logs "Logs de la aplicacion" \
   2>&1 1>&3)
   exit_status=$?
   exec 3>&-
   case ${exit_status} in
      ${dialogcancel})
         clear
         echo "Su tarea ha sido finalizada con exito." >&2
         exit
      ;;
      ${dialogesc})
         clear
         echo "Su tarea ha sido abortada." >&2
         exit 1
      ;;
   esac
   case ${menuitem} in
      Start)  appStart;;
      Stop)   appStop;;
      Logs)   appLogs;;
      Backup) backupDb;;
      Restart) appRemove && appStart;;
   esac
done
##################################################