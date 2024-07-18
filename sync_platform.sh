#php artisan serve --host=0.0.0.0 --port=8000 >/dev/null &

#rsync -avL --delete --progress -e "ssh -i ~/.ssh/Linux-CodeCambat.pem"  --exclude "vendor" --exclude "storage" ~/git/kalepa/*  ec2-user@platform.datap.ai:/var/www/kalepa/
rsync -avL --delete --progress -e "ssh -i ~/.ssh/Linux-CodeCambat.pem"  --exclude "storage" ~/git/kalepa/*  ec2-user@test.datap.ai:/var/www/kalepa/

#npm run watch-poll 
