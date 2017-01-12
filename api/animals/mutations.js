// This file defines GraphQL resolvers that make mutations centered on a Animals
'use strict'
import { GraphQLFloat, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'
import Animal from './type'
// import Input from './input'
import Resolvers from './resolvers'
import Status from '../meta'

export default {
  createAnimal: {
    args: {
      age: {
        description: `How old is this animal, number of months.`,
        type: GraphQLFloat
      },
      breed: {
        description: `If this animal is commonly categorized within its species, how so?`,
        type: GraphQLString
      },
      colors: {
        description: `A generic list of colors that best describe this animal.`,
        type: new GraphQLList(GraphQLString)
      },
      dateAvailable: {
        description: `What is the earliest this animal can be adopted?`,
        type: GraphQLString
      },
      description: {
        description: `A short paragraph or two from the humane society about this animal's personality.`,
        type: GraphQLString
      },
      fee: {
        description: `What does it cost to adopt this animal, in US dollars.`,
        type: GraphQLFloat
      },
      id: {
        description: `A unique identifier for this animal in the humane society database.`,
        type: new GraphQLNonNull(GraphQLID)
      },
      imageURL: {
        description: `A URL to the entry image hosted by the humane society.`,
        type: GraphQLString
      },
      name: {
        description: `The animal's given name. Sometimes auto-generated by the Humane Society.`,
        type: new GraphQLNonNull(GraphQLString)
      },
      sex: {
        description: `The anatomical sex of the animal, if known.`,
        type: GraphQLString
      },
      species: {
        description: `The biological species of the animal.`,
        type: GraphQLString
      },
      weight: {
        description: `The weight of the animal in English pounds, if known.`,
        type: GraphQLFloat
      }
    },
    resolve: Resolvers.createAnimal,
    type: Animal
  },
  removeAnimal: {
    args: {
      id: {
        description: `Unique ID of the target animal.`,
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: Resolvers.removeAnimal,
    type: Status
  }
}
