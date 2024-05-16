"use server";
import { revalidatePath } from "next/cache";
import { Products, Users } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

const addUser = async (formData) => {
  const { userName, password, email, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Users({
      userName,
      password: hashedPassword,
      email,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();

    redirect("/dashboard/users");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default addUser;

export const addProduct = async (formData) => {
  const { title, desc, price, color, stock, size } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const newProduct = new Products({
      title,
      desc,
      price,
      color,
      stock,
      size,
    });
    await newProduct.save();
    redirect("/dashboard/products");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Users.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("User not deleted");
  }
  revalidatePath("/dashboard/users");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Products.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Product not deleted");
  }
  revalidatePath("/dashboard/products");
};

export const updateUser = async (formData) => {
  const { id, userName, email, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      userName,
      email,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined && delete updateFields[key]))
    await Users.findByIdAndDelete(id, updateFields)
  } catch (error) {
    console.log(error);
    throw new Error("field not update")
  }
};
