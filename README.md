# Test Assignment: Display a List of Users
The goal of this test assignment is to display a list of users on a web page. The list of users could be visualized as either a list of tiles or a list of rows. User can switch between two visualization modes. Data for a list of users is taken from a JavaScript object.

## Solution: React
This project solves the assignment using React.

## Project Structure
```
├── public
├── src
│   ├── App.css             # Main component's CSS styles
│   ├── App.js              # Main component
│   ├── data.js             # Users data
│   ├── index.js            # Entry point
│   ├── List.css            # List component's CSS styles
│   ├── List.js             # List component
│   ├── ListItem.css        # List item component's CSS styles
│   ├── ListItem.js         # List item component 
│   ├── Table.css           # Table component's CSS styles
│   ├── Table.js            # Table component
│   ├── TableRow.css        # Table row component's CSS styles
│   ├── TableRow.js         # Table row component
├── .gitignore              # .gitignore file
├── package-lock.json       
├── package.json
├── README.md               # Readme file
```

## How to Launch the Solution
### Development mode
* Install dependencies using `npm install`.
* Run the app in the development mode `npm start`.
* Open [http://localhost:3000](http://localhost:3000) to view app in the browser.

### Production mode
* Install dependencies using `npm install`.
* Build the app for production by running `npm run build`.
* [Optional] Install the static web server with `npm install -g serve`.
* [Optional] Run the static web server using `serve -s build`.
