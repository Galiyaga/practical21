const btn = document.querySelector('.button');

btn.addEventListener("click", () => {
    const userId = document.querySelector('#userId').value;
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(response => response.json())
        .then(tasks => {
            if (tasks.length === 0) {
              document.querySelector('.list').textContent = ('Пользователь с указанным id не найден');
            } else {
              const resultList = document.querySelector('.list');
              resultList.innerHTML = '';
              const ul = document.createElement('ul');
              tasks.forEach(task => {
                  const li = document.createElement('li');
                  li.textContent = task.title;
                  if (task.completed) {
                      li.style.textDecoration = 'line-through';
                  }
                  ul.appendChild(li);
              });
              resultList.appendChild(ul); 
            }
        })
        .catch(error => {
            console.log('error: ', error)
            document.querySelector('.list').textContent = ('Пользователь с указанным id не найден');
        });
});

// Задача: Если пользователь с введенным id не существует, вывести сообщение: «Пользователь с указанным id не найден».
// Проблема в том, что существуют все id до бесконечности, просто с пустыми массивами, соответственно сервер не выдает 
// ошибку и сообщение вывести можно только при условии выдачи массива. Но выдача пустого массива не является ошибкой.
// Соответственно проблема в API. 