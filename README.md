# Github-Challenge

This is a test for a Front-End Engineer position at Docker. The test consists of creating an interface that allows a user to do a search by username and return basic information, as well as a list of repositories as in Github referring to that username.

## Publish domain
https://dock-challenge.herokuapp.com/

## Run the project
1. git clone https://github.com/JohnOliver23/Github-Challenge.git
2. cd Github-Challenge/
3. yarn install
4. open the file **.env** (if you are in linux environment, you can open with the comand : **gedit .env**)
5. change the line that contains **REACT_APP_GITHUB_TOKEN=xxxxx-xxxxx-xxxxxx-xxxx** for **REACT_APP_GITHUB_TOKEN=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**
7. yarn start

## Run the tests
1. cd Github-Challenge/
2. yarn test

## Run the tests report
1. yarn test:coverage
![tests](https://github.com/JohnOliver23/Github-Challenge/blob/main/images/tests.png?raw=true)


# Pages
### Home, Without Username Searched 

- User can search repositories filtering by username
- the screen without username searched


#### Desktop
![Desktop1](https://github.com/JohnOliver23/Github-Challenge/blob/main/images/desktop1.png?raw=true)

#### Mobile
![Mobile1](https://github.com/JohnOliver23/Github-Challenge/blob/main/images/mobile1.png?raw=true)

### Home, With Username Searched 

- User can search repositories filtering by username
- the screen with username searched

#### Desktop without search
![Desktop2](https://github.com/JohnOliver23/Github-Challenge/blob/main/images/desktop2.png?raw=true)

#### Mobile
![Mobile2](https://github.com/JohnOliver23/Github-Challenge/blob/main/images/mobile2.png?raw=true)


## Technologies:
- Typescript
- HTML
- CSS
- GraphQL

### React FC with hooks
- useState  for state control
- useMemo to memorize calculated values

## Libraries
- Styled components
- SASS
- Axios
- React Router DOM
- React-Icons


