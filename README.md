# Project Name

> Project description: Little-Johns

## Related Projects

  - https://github.com/little-johns/Price-Paid-Average-Service
  - https://github.com/little-johns/stock-chart
  - https://github.com/little-johns/buy-form

## Installation
For Development Mode
```
npm start 
npm run start:server
```
For Production Mode
```
npm run build
npm run start:server
```


## CRUD API
In order to add a news article to our database list of articles:
```
POST /news
```

In order to read a specific news article from our database
```
GET /news/:id
```

In order to change or update a news article from our database
```
PATCH /news/:id
```