const {GraphQLObjectType, GraphQLInt, GraphQLString , GraphQLBoolean,  GraphQLList, GraphQLSchema ,GraphQLEnumType } = require('graphql');
const axios = require('axios');

const API_ID = '58f8ec64';
const API_KEY = 'f70656e827cebd9e8e5c851c7b5268c0'

const sample = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`

const FoodType = new GraphQLObjectType({
    name: 'Food' ,
    fields: () => ({
        q : { type : GraphQLString},
        hits : { type: GraphQLList(HitsType)}
    })
})

const HitsType = new GraphQLObjectType({
    name: 'Hits',
    fields: () => ({
        recipe : { type : RecipesType},

    })
})

const RecipesType = new GraphQLObjectType({
    name: 'Recipes',
    fields : () => ({
        label: { type : GraphQLString},
        image : { type : GraphQLString},
        ingredients : { type : GraphQLList(IngredientType) }
        
    })
})

const IngredientType = new GraphQLObjectType({
    name : 'Ingredients',
    fields : () => ({
        text: {type : GraphQLString}
    })
})



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType' ,
    fields : {
        foods : {
            type : new GraphQLList(FoodType),
            resolve(parent , args) {
                return axios.get(sample)
                .then(res => res.data)
            }
        },
        food : {
            type : FoodType,
            args : {
                q : {type : GraphQLString},       
            },
            resolve(parent, args){
                return axios.get(`https://api.edamam.com/search?q=${args.q}&app_id=${API_ID}&app_key=${API_KEY}`)
                .then(res => res.data)
            }
        }
   
    }


})



module.exports = new GraphQLSchema({
    query: RootQuery
});