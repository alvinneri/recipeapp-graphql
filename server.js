const express = require('express');
const graphqlHTTP = require('express-graphql');
const PORT = process.env.PORT || 5000;
const schema = require('./schema');
const app = express();
const cors = require('cors');

app.use(cors());

app.use('/graphql' , graphqlHTTP({
    schema: schema ,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`App listening to PORT ${PORT}`);
    
})

