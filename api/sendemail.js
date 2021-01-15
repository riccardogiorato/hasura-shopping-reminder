module.exports = (req, res) => {
  // this function will be launched from Hasura event
  try {
    const {
      event: { op, data },
      table: { name, schema },
    } = JSON.parse(req.body);
    res
      .status(200)
      .json({
        method: req.method,
        msg: "Received event!",
        data: { op, data, name, schema },
      });
  } catch (err) {
    res.send(err); // send the thrown error
  }
};
