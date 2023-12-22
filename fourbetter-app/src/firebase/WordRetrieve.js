import { getDocs, collection } from "firebase/firestore";
import { db } from "./FirebaseConfig.js";

const wordArray = [];

async function WordRetrieve() {
  const docRef = collection(db, 'Users', 'userID', 'word_definitions');
  
try {
  const docsSnap = await getDocs(docRef);
  if(docsSnap.docs.length > 0) {
    docsSnap.forEach(doc => {
      console.log(doc.data());
      console.log(doc.id);
      wordArray.push(doc.data());
    })
  }
} catch(error) {
  console.log(error);
}
console.log(wordArray);
return wordArray;
}

export default WordRetrieve;
