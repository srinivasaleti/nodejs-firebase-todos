const admin = require("firebase-admin")
const serviceAccount = require("./serviceAccountKey.json")

const Firebase = {
  initializeDB: () => {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://fir-test-b3501.firebaseio.com"
    })
  },
  db: () => {
    return admin.database();
  }
}

module.exports = Firebase