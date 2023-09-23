import * as functions from "firebase-functions";

exports.checkAdmin = functions.https.onCall((data, context) => {
    return context.auth?.uid === process.env.ADMIN_UID;
});
