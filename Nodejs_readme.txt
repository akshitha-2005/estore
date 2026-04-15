1. Create folder estore-server
2. run npm init -y (-y means accept all default settings) - create package-lock.json
3. run npm i express - creates package.json with express version
4. create a new index.js file
5. To run the file - node index.js

Nodemon is a utility that automatically restarts the server every time we save the changes in the code.
To install - npm i -g nodemon (-g - to install it globally)
To run - nodemon index.js

To connect Node.js with MySQL, we need a driver - which acts as a bridge that helps the two sides communicate - mysql2 driver
In the terminal : npm install mysql2

Installed the mysql2 driver, created a connection pool, successfully connected Node.js API to MySQL

To install CORS: npm i cors

bcryptjs library helps to encrypt the user's sensitive information like password - before it gets stored inside the database to provide additional security.
To install bcryptjs: npm i bcryptjs --save

To generate the secure tokens, we are going to use a very popular Node.js package jsonwebtoken, commonly known as jwt.
To install use command: npm i jsonwebtoken --save
bcrypt.compare() - used to decode
bcrypt.hash() - used to encode
jwt.sign() - used for creating a jwt token
A token contains some user information like id and email, which are encoded inside the token

To install stripe in estore/estore-server
use command: npm i stripe --save

To install stripe in estore:
use command: npm i @stripe/stripe-js

