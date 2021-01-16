const mailjet = require("node-mailjet").connect(
  process.env.MAILJET_1,
  process.env.MAILJET_2
);

module.exports = async (req, res) => {
  // this function will be launched from Hasura event
  const { body } = req;
  try {
    const wishlistUser = body.event.data.new;
    const result = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "gioratfree@protonmail.com",
            Name: "future plants",
          },
          To: [
            {
              Email: wishlistUser.email,
            },
          ],
          Subject: "Greetings from your future plants!",
          TextPart:
            "Your wishlisted plant was: " +
            wishlistUser.plant +
            "We suggest you to buy it for us only " +
            wishlistUser.suggestion +
            "!",
          HTMLPart:
            "<h1>future plants</h1><br/>Your wishlisted plant was:<b> " +
            wishlistUser.plant +
            "</b><br/>We suggest you to buy it for use only " +
            wishlistUser.suggestion +
            "!",
        },
      ],
    });

    res.status(200).json({
      method: req.method,
      msg: "Received the event and sent the email to the user!",
      result: result.body,
    });
  } catch (err) {
    res.send(err); // send the thrown error
  }
};
