# node_for_aws
zdistancelab_task

Create an api in serverless

instruction to install: 

#### install package.json
npm init -y

#### package-lock.json

npm install 

#### Install severless offline

npm install serverless-offline --save-dev

### add .. i serverless.yml
plugins:
        - serverless-offline

### in package.json - scripts:

"dev":"sls offline"
