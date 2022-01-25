# Todolist API

## Start database

You can run mongodb with this command :

```bash
> mongod
```

## Use dotenv

You have to create **.env** file at the root of api folder

```js
//.env file

// Create your access token secret
ACCESS_TOKEN_SECRET=
// Get your mongodb url
MONGODB_URI=
```

## How start API ?

Open new cmd and run :

```bash
> npm i
```

if this is the first time, run :

```bash
> npx tsc
```

And now you can start the API with this command :

```bash
> npm start
```

## Routes

### Routes Users

**Before the Users Routes, add `/users`**

```bash
# For example :
http://localhost:4000/users/login
```

-   Login : `POST : /login`
    -   Data to be transmitted :
        ```json
        {
            "email": "toto@mail.fr",
            "password": "toto"
        }
        ```
-   Signup : `POST : /signup`
    -   Data to be transmitted :
        ```json
        {
            "pseudo": "Toto59",
            "email": "toto@mail.fr",
            "password": "toto"
        }
        ```

### Routes Tasks

Before the Tasks Routes, add `/tasks`

```bash
# For example :
http://localhost:4000/tasks/add-new-task
```

-   Add new task : `POST : /add-new-task`
    -   Data to be transmitted :
        ```json
        {
            "description": "Faire les courses",
            "userId": "61efe8e2ca30a428a259833a" // It's the id of the user who creates the task
        }
        ```
-   Get all tasks : `GET : /all-tasks`
-   Get task details : `GET : /task/:id`
-   Update task : `PUT : /task/:id`
    -   Data to be transmitted :
        ```json
        {
            "descritpion": "Faire une pause"
        }
        ```
-   Delete task : `DELETE : /task/:id`
