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
