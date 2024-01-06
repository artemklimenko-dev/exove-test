# Exove test tasks

### 1A. Write a sorting algorithm

Write a sorting algorithm that sorts strings based on the ASCII code of the third letter first, then second letter and then the first letter.

Here’s a list of words you can test with:
- BOAT
- Locomotive
- Poet
- Accelerate
- GOLF
- ACCIDENTAL
- Submarine


### Setup and prerequisites

This task is written using TypeScript. I decided to choose it as it is a de-facto standard nowadays and it is a good way to keep things more structured and robust, also it enhances readability.

To run the code, you need to have Node.js installed. Go into 1A folder, after that, run:

```
npm install
```

Compile the project:
```
tsc
```

Run the code:
```
node src/app.js
```

### Implementation

Considering the implementation, I have decided to keep things simple and just use the built-in sort function. My approach is not to overwrite things which are already written well, in this case a JS library. The only thing I had to do is to provide a custom comparator function. It is a function that takes two arguments and returns a number. The number can be positive, negative or zero. If it is positive, the first argument is greater than the second one, if it is negative, the first argument is less than the second one, and if it is zero, the arguments are equal. I also have tried to cover edge cases, such as empty strings and strings with less than 3 characters.

## Section 2

### 2B. Create an SQL query


### Setup and prerequisites

In this task I am using docker-compose, so Docker has to be installed in order to run the code. Also fyi, I am using postgresql as a database, as it is something I am more familiar with and the difference with mysql is negligible in this case.

Go into 2B folder, after that, run:

```
docker-compose up
```

The docker-compose file will create a postgresql database and will run a script found in init.sql that will create a table and insert some data into it. 

First, connect to the database:

```
psql -h localhost -p 5432 -U user -d exove-db
```
Password is `password`.

The query can be found in the file query.sql. You can run it directly in the psql console.

You might want to remove the postgresqlcontainer and volume after you are done with the task, or in case you would like to do a fresh recreate.

### Implementation
Here I d like to explain my solution in more detail.

```sql
SELECT CONCAT(people.first_name, ' ', people.last_name) AS name,
    COALESCE(STRING_AGG(phones.number, ','), 'N/A') AS numbers
    FROM people LEFT JOIN phones ON people.id = phones.user_id
    GROUP BY people.first_name, people.last_name
    ORDER BY people.last_name, people.first_name;
```

First, I am selecting the first and last name of the person and concatenating them into a single column. I am using CONCAT function for that. I am also using COALESCE function to replace null values with 'N/A'. After that, I am joining the phones table with the people table on the user_id column. I am using LEFT JOIN, as I want to include people who do not have any phone numbers. After that, I am grouping the results by first and last name. Finally, I am ordering the results by last name and first name, so that it matches the example output.

## Section 3


### 3C. Write a non-directional graph program

### Setup and prerequisites

This task is written using TypeScript. I decided to choose it as it is a de-facto standard nowadays and it is a good way to keep things more structured and robust, also it enhances readability.

To run the code, you need to have Node.js installed. Go into 3C folder, after that, run:

```
npm install
```

Compile the project:
```
tsc
```

Run the code:
```
node src/app.js
```

### Implementation

I have decided to use a union-find algorithm to solve this task. It it quite an efficient algorithm for finding connected components in a graph and is also kind of easy to implement. The idea is to keep track of the parent of each node. Initially, each node is its own parent. When we connect two nodes, we set the parent of one of them to be the other one. When we want to find the parent of a node, we keep going up the tree until we find a node that is its own parent. If the parents of two nodes are the same, then they are connected. If they are not, then they are not connected.