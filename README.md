## INSTALLATION
```
git clone https://gitlab.com/cgi38/morfe-test.git
cd <folder_name_here>
npm install

# copy .env.example file
cp .env.example .env

# paste this in .env file
APP_NAME="STI - Project Frontend Template"
APP_ENV=local
APP_KEY=base64:x8DjNWoQ8Ko+kU3Xexo+0s5QheLPaeDoHxQURDcmqew=
APP_URL=https://dms=practice.test
CLIENT_URL= https://cgi.test:3000

#SSR ENVIRONMENT(EDIT THIS TO MATCH YOUR nuxt.config.js)
HOSTNAME="cgi.test"
APP_PORT="3000"
CERT_PATH="C:/Users/<user>/.config/valet/Certificates/"
KEY_PATH="C:/Users/<user>/.config/valet/Certificates/"

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

Note: Change the <user> on both CERT_PATH and KEY_PATH


#to run the project
npm run dev
```



Go to your browser, then paste this link:
https://cgi.test:3000/


