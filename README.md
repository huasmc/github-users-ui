# Requirements

- [x] React
- [x] Login
- - [x] E-mail
- - [x] Password (8 characters)
- [x] Navigation
- - [x] Logo
- - [x] Home Link
- - [x] User E-mail/Log-out
- [x] Fetch users from Github REST API
- [x] Users Table
- - [x] Avatar
- - [x] Username
- [x] Filter
- - [x] Table 25, 50, 100 per page
- - [x] Pagination
- [x] User details view
- - [x] Name, Email, Bio, URL
- - [x] Repositories, followers, following
- [x] Repository details
- - [x] Name
- - [x] Description
- - [x] Language
- - [x] Link to Github
- [x] Github repository
- [x] Difficulties (easy):

  - Bootstrap ellipsis pagination:
    Solution: Call the API to get user count, calculate the number of pages (per_page/user_count) and programmatically implement pagination ellipsis with Bootstrap.

```
const PAGE_WINDOW = 5; // number of pages to display at a time

const PaginationWithEllipsis = ({ activePage, onPageChange }) => {
const pages = Array.from({ length: 50 }, (\_, index) => index + 1);

const start = Math.max(0, activePage - PAGE_WINDOW / 2);
const end = Math.min(pages.length, start + PAGE_WINDOW);

return (
<Pagination size="sm" style={{ margin: "15px" }}>
{start > 0 && (
<>
<Pagination.Item onClick={() => onPageChange(1)}>1</Pagination.Item>
<Pagination.Ellipsis />
</>
)}
{pages.slice(start, end).map((page, index) => (
<Pagination.Item
key={index + 1}
active={activePage === page}
onClick={() => onPageChange(page)} >
{page}
</Pagination.Item>
))}
{end < pages.length && (
<>
<Pagination.Ellipsis />
<Pagination.Item onClick={() => onPageChange(pages.length)}>
{pages.length}
</Pagination.Item>
</>
)}
</Pagination>
);
};
```

Github

# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
