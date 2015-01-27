Make an API_key.txt file

you have to .gitignore this file

you are NOT pushing the API-key text file

you have to read this file into your code

fs.readFileSync -- look up how to do this again. 

* var api_key = fs.readFileSync('api_key.txt', 'utf8');

You can try putting the multiple keys into a json file, then get the value of the key in the object

fs.readFileSync - JSON.parse, and then grab the api-key. 

if you want to host on DO you have to send up the text file without using Github. You can use the SSH link. You have to google it. SCP is the way to copy the SSH up there. 


How to destroy part of your github history if you accidentally push a key to github

* git reset --hard (id of the commit)

you can get the id of the commit through using git log