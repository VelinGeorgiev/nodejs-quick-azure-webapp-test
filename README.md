This is a quick way to test something in Azure app service

Deploy using Azure CLI:

az webapp deployment source config-zip --resource-group "RG-Name" --name 'WebApp-Name' --src "C:\p\test.zip"

Go to app service Kudu tools and

npm i

npm start (if needed)

