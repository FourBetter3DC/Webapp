import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";

const addWordDefinition = async (userId, wordData) => {
  const dbRef = collection(db, 'Users', userId, 'word_definitions');
  
  addDoc(dbRef, wordData)
    .then(() => console.log("Review added successfully!"))
    .catch((error) => console.error("Error adding review:", error));
};

export default addWordDefinition;

