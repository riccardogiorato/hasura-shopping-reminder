module.exports = async (req, res) => {
  // this function will be launched from Hasura event
  try {
    if (req.method === "POST") {
      const request = JSON.parse(req.body);
      res.status(200).json( request.event.data );
    } else {
      res.status(200).json({ message: "NO PERMISSION TO USE THIS!" });
    }
  } catch (err) {
    res.send(err); // send the thrown error
  }
};
