const data = [    
    {
        name: `Simba`,
        id: `0`,
        species: `RAT`,
        color: `BROWN`,
        adopt_fee: 5.34,
        weight: 1.2,
        sex: `MALE`,
        age: 24.2,
        description: `Oh hello, my name is Simba!`,
        date_available: `2016-11-09`,
        image_url: `http://www.example.com`
    },
    {
        name: `Clementine`,        
        id: `1`,
        species: `RAT`,
        color: `BLACK`,
        adopt_fee: 59.89,
        weight: 0.7,
        sex: `FEMALE`,
        age: 36.8,
        description: `Oh hello, my name is Clementine!`,
        date_available: `2016-11-29`,
        image_url: `http://www.examplesadfasf.com`             
    },
    {
        name: `Ben`,
        id: `2`,
        species: `DOG`,
        color: `WHITE`,
        adopt_fee: 1987.01,
        weight: 29.0,
        sex: 'MALE',
        age: 240,
        description: `Oh hello, my name is Ben!`,
        date_available: `2016-12-09`,
        breed: `Golden Retriever`
    }
]

const getByID = id => data.filter(animal => animal.id === id)[0]
const getAllSpecies = species => data.filter(animal => animal.species === species)
const getAllNamed = name => data.filter(animal => animal.name === name)
const getCheaperThan = max_price => data.filter(animal => animal.adopt_fee < max_price)
const getAllSex = sex => data.filter(animal => animal.sex === sex)
const getYoungerThan = age => data.filter(animal => animal.age <= age)
const getOlderThan = age => data.filter(animal => animal.age >= age)
const sortByAvailable = () => data.sort((x, y) => x.date_available < y.date_available ? -1 : 1)
const getWithImage = () => data.filter(animal => animal.image_url)
const getByBreed = breed => data.filter(animal => animal.breed === breed)

module.exports = { 
    getByID, 
    getAllSpecies, 
    getAllNamed, 
    getCheaperThan, 
    getAllSex, 
    getYoungerThan, 
    getOlderThan, 
    sortByAvailable, 
    getWithImage,
    getByBreed
}