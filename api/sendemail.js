module.exports = async (req, res) => {
  // this function will be launched from Hasura event
  try {
    if (req.method === "GET") {
      res.status(200).json({ message: "email sent to the user!" });
    } else {
      res.status(200).json({ message: "NO PERMISSION TO USE THIS!" });
    }
  } catch (err) {
    res.send(err); // send the thrown error
  }
};
