import {
  firebase,
  // FieldValue
} from "../lib/firebase";

export async function doesUserNameExists(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username.toLowerCase())
    .get();

  //   console.log(result);
  return result.docs.length > 0;
}

export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  //   console.log(result);
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user[0];
}
