import { Usermodel } from "../model/Users.js";

const getAllUsers = async (req, res) => {
  console.log("testing....");
  // console.log("req.body", req.body);
  // const userId = req.body.id;
  const allUsers = await Usermodel.find();
  // const allUsers = await Usermodel.findById(userId);
  console.log("allUsers", allUsers);
  // res.status(200).json(allUsers);
  res.status(200).json({
    number: allUsers.length,
    message: "all users",
    allUsers,
  });
};
export default getAllUsers;

// const createUser = async (req, res) => {
//   console.log("creating user...");
//   const myUsers = req.body;
//   res.status(200).json(myUsers);
// };
// export default createUser;

export const createUser = async (req, res) => {
  console.log("creating user...");
  const userbody = req.body;
  res.status(200).json(userbody);
};
