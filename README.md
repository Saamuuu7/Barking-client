# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


|   HTTP VERB   |     PATH        | Request Body |                 Action              |
| ------------- | -------------   | -------------| ----------------------------------- |
| Post          | `/bars`         | JSON         | Create a new Project                |
| Get           | `/bars `        | {empty}      | Return all project                  |
| Get           | `/bars/:barsId `| {empty}      | Return all the specified project    |
| Put           | `/bars/:barsId` | JSON         | Edit the specified project          |
| Delete        | `/bars/:barsId` | {empty}      | Delete the specified project        |




|   HTTP VERB   |         PATH            | Request Body |             Action               |
| ------------- | ----------------------- | ------------ | -------------------------------  |
| Post          | `/comments `            | JSON         | Create a new Project             |
| Get           |` /comments `            | {empty}      | Return all project               |
| Get           | `/comments/:commentsId `| {empty}      | Return all the specified project |
| Put           | `/comments/:commentsId `| JSON         | Edit the specified project       |
| Delete        | `/comments/:commentsId `| {empty}      | Delete the specified project     |



ROUTES - CLIENT

|   DESCRIPTION     |           PATH          | 
| ----------------  | ----------------------- |
| home page         | `/`                     | 
| all bar page      |` /bars `                | 
| bar detail        | `/bar/:barId `          | 
| add new bar       | `/new-bar `             | 
| all comments      | `/all-comments`         | 
| add comments      | `/new-comment`          | 
| about us          | `/about-us`             | 