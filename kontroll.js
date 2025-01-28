fetch("https://dummyjson.com/users")
  .then(response => response.json())
  .then(data => {
    data.users.forEach(fn => {
      console.log(fn.firstName);
    });
  })

