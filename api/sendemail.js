module.exports = (req, res) => {
  // this function will be launched from Hasura event
  const { body } = req
  try {
    res
      .status(200)
      .json({
        method: req.method,
        msg: "Received event!",
        data: { body },
      });
  } catch (err) {
    res.send(err); // send the thrown error
  }
};
