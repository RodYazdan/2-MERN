const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');

// req is short for request
// res is short for response

const randomName = faker.name.firstName(); // Willie Bahringer
const randomEmail = faker.internet.email(); // Tomasa_Ferry14@hotmail.com
const randomCard = faker.helpers.createCard();
const animal =faker.animal.type();

const createUser = () => {
    const newUser = {
        firstname: randomName,
        lastname: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: randomEmail,
        password: faker.internet.password()
    }
return newUser

}
const createCompany = () => {
    const newCompany = {
        name: faker.company.companyName(),
        address: 
        { 
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
return newCompany

}


app.get('/api/users/new', (req, res) => {
    const newUser = createUser()
    console.log(newUser)
    res.json(newUser)
})


app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany()
    console.log(newCompany)
    res.json(newCompany)
    })


app.get('/api/user/company', (req, res) => {
    const newUser = createUser()
    const newCompany = createCompany()
    const userCompany ={
        newUser: newUser,
        newCompany :newCompany
    }
    res.json(userCompany)
    // res.json({newCompany,newUser})
    
    })

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);