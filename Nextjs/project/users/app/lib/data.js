import {Users, Products} from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
    try {
        connectToDB(); // await the connection
        const users = await Users.find(); // Use User model
        return users;
    } catch (error) {
        console.error(error); // log the error
        throw error; // rethrow the error to be caught elsewhere
    }
};

export const fetchUser = async (id) => {
    try {
        connectToDB(); // await the connection
        const user = await Users.findById(id); // Use User model
        return user;
    } catch (error) {
        console.error(error); // log the error
        throw error; // rethrow the error to be caught elsewhere
    }
};

export const fetchProducts = async () => {
    try {
        connectToDB(); // await the connection
        const products = await Products.find(); // Use User model
        return products;
    } catch (error) {
        console.error(error); // log the error
        throw error; // rethrow the error to be caught elsewhere
    }
};