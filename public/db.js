let db;
// open a new DB called budget
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function(event) {
   // create object store
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;
  // check if app is online, then execute checkDatabase
  if (window.navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  console.log(event.target.errorCode);
};

// network error kicks off saveRecord
function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction(["pending"], "readwrite");

  // access your pending object store
  const store = transaction.objectStore("pending");

  // add record to your store with add method.
  store.add(record);
}

function checkDatabase() {
  // open a transaction on your pending db
  const transaction = db.transaction(["pending"], "readwrite");
  // access your pending object store
  const store = transaction.objectStore("pending");
  // get all records from store and set to a variable
  const getAll = store.getAll();
  console.log(getAll)

 const getCursorRequest = store.openCursor()
  getCursorRequest.onsuccess = event => {
    const cursor = event.target.result
    if (cursor) {
      console.log(cursor.value);
      cursor.continue()
      .then(response => response.json())
      .then(() => {
        // this clears out the indexedDB objectstore
        const transaction = db.transaction(["pending"], "readwrite");
        const store = transaction.objectStore("pending");
        store.clear();
      });
    } else {
      console.log("All done!")
    }
  }
      
    }

// this event tells me when i am online or offline, and when it goes back online, it will execute checkDatabase
window.addEventListener("online", checkDatabase);
