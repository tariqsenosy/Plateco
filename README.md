
# PlateCo 

Plates Co are the leading provider of made up dinner plates and they’ve contracted you to
create a proof of concept for their new sales system.


## Run Locally

Clone the project

```bash
  git clone https://github.com/tariqsenosy/leanscale-plateco
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm app.js
```


## API Reference

#### Get all items

```http
  POST /api/setPlatesIntoBasket
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `plates` | `string` | **Required**. Plates code |




## Curl Request
```
curl --location --request POST 'http://localhost:3000/api/setPlatesIntoBasket' \
--header 'Content-Type: application/json' \
--header 'Cookie: StoreID=d672aab8-34ba-4a8c-8e60-0a296d37373e' \
--data-raw '{
    "plates": "B01, B01, R01, R01, R01"
}'
```
## Solution Explainiation and Assumptions
##### The solution is a simple api for handling Plates Co calcluations
##### Solution divided into 
###### 1-application layer (contains the businesss of the project)
###### 2-data (has models and data needed)
###### 3-controllers 
###### 4-test (has test cases for the api mentioned in the document)
##### The solution is depending one 2 factories 
###### 1-Offer Factory (it faciliate to us create new types of offers with diffrent logic and to apply to the basket)
###### 2-Delivery Factory (faciltaes adding new delivery plans )


## Tech Stack

**Server:** Node, jset(for unit test)


## Running Tests

To run tests, run the following command

```bash
  npm test
```

