
module.exports = async (req, res) => { // this function will be launched from Hasura event
    try {
        if (req.method === 'POST') {
            res.status(200).json({message: "email sent to the user!"});
          }
    } catch (err) {
      res.send(err) // send the thrown error
    }
  }