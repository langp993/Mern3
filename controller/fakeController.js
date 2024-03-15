//3rd  create controller file, which will contain all the functions we need to call with the different routes from the router

import FakeModel from "../model/FakeModel.js";

const getAllFakeDocuments = async (req, res) => {
  console.log("getAllFakeDocuments is working");
  //to get the docuiments, we need to use the model with a mongoose method

  const allDocuments = await FakeModel.find();
  //   console.log("allDocuments", allDocuments);

  res.status(200).json({
    message: "all documents here",
    numberOfDocuments: allDocuments.length,
    allDocuments,
  });
};

//4. create a controller function to do xwhat you need to do
const createFakeDocument = async (req, res) => {
  console.log("createFakeDocs is working");
  //5. check that in the request (coming from the client), the information you need is included (for Post request is should come inside the req.body)
  console.log("req.body", req.body);

  //6. create a new document, using the model with the information contained in the body.

  const newDocument = new FakeModel({
    name: req.body.name,
    age: req.body.age,

    email: req.body.email,
    password: req.body.password,
  });

  //! DO NOT FORGET TO PUT ALL YOUR ASYNC CODE INSIDE A TRy/CATCH, and send response in case of a bad request
  //7. store that newly created document into the DB (do this inside a trz/catch block...and do chekings)

  const savedDocument = await newDocument.save();

  //8. send response to the client

  res.status(200).json({
    message: "new document sucessfully stored",
    savedDocument,
  });
};

export { getAllFakeDocuments, createFakeDocument };
