# NC-News Front-End Application

NC-News is a front-end application built using React.js, Bootstrap, and CSS3. This application allows users to view, create, update, and delete articles and topics. It interacts with an external API that provides CRUD (Create, Read, Update, Delete) functionality for articles, topics, and voting on articles.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)


## Demo

A live demo of the NC-News application is available at [https://beautiful-profiterole-ff85b4.netlify.app](https://beautiful-profiterole-ff85b4.netlify.app).


## Features

- View a list of articles
- View individual article details
- Upvote or downvote articles
- Comment on articles

## Installation

1. Clone this repository to your local machine using:

   ```bash
   git clone https://github.com/your-username/NC-News.git

2. Navigate to the project directory: 

     ```bash
   cd NC-News

3. Install the required dependencies: 

     ```bash
   npm install


## Usage

1. Start the development server:

     ```bash
   npm run dev

2. Open your web browser and navigate to http://localhost:5173 to access the NC-News application.


## API

The NC-News application interacts with the following endpoints provided by the external API:

- **Retrieve Topics**
  - Endpoint: `GET /api/topics`
  - Description: Retrieve a list of available topics.

- **Retrieve Articles**
  - Endpoint: `GET /api/articles`
  - Description: Retrieve a list of articles.

- **Retrieve Article Details**
  - Endpoint: `GET /api/articles/:article_id`
  - Description: Retrieve details of a specific article.

- **Update Article Votes**
  - Endpoint: `PATCH /api/articles/:article_id`
  - Description: Update an article's votes.


- **Retrieve Article Comments**
  - Endpoint: `GET /api/articles/:article_id/comments`
  - Description: Retrieve comments for a specific article.

- **Add Comment to Article**
  - Endpoint: `POST /api/articles/:article_id/comments`
  - Description: Add a new comment to an article.


For detailed API documentation, refer to [API Documentation](https://nc-news-iila.onrender.com/api).


## Contributing

Contributions to NC-News are welcome! To contribute:

1. Fork this repository.
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m "Add your commit message here"`.
4. Push to your branch: `git push origin feature/your-feature-name`.
5. Create a pull request detailing your changes.

## License

This project is licensed under the MIT License.

Feel free to reach out to us if you have any questions or feedback. Happy coding!

Project maintained by [Davide Castelli](https://github.com/Castelli87).
