const todosDB = () => {
  const db = JSON.parse(localStorage.getItem("todosDB"));
  if (db) {
    return db;
  } else {
    return [];
  }
};

export default todosDB();
