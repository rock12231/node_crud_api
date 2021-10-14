import { v4 as uuidv4 } from 'uuid';

let users = []

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    console.log('User with name ' + user.firstName + ' is added to Database')
    res.send(`User with name ${user.firstName} added to Database`);
}

export const getUsers = (req, res) => {
    console.log("All Users: ",users);
    res.send(users);
}

export const getUser = (req, res) => {
    console.log("Get single user by Id");
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    console.log("Delete individual user by Id");
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User id ${id} will be deleted from database`);
}

export const updateUser = (req, res) => {
    console.log("Update individual user by Id");
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User id ${id} will be updated in Database`);
}