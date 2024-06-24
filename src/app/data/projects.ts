import { Project } from '../model/projects';

export const PROJECTS: Project[] = [
    {
      "id": 1,
      "title": "Hi-Low World!",
      "link": null,
      "slug": "hi-low-world",
      "excerpt": "A simple game of Hi-Low built with HTML, CSS, and Javascript.",
      "body": '"Hi-Low World!" was a Javascript game developed to showcase the use of arrays, loops, and conditional statements. The game generates a random number between 1 and 4096, and the player must guess the number within a certain number of attempts. The game provides feedback on each guess, indicating whether the guess was too high or too low. The player wins by guessing the correct number within the allotted attempts. The game also includes a reset button to start a new game.',
      "url": null,
      "published_date": null,
      "home_image": 'HiLow-Lt.png',
      "image": 'HiLowWorld.png',
      "thumb": null,
      "category_id": 1,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 1, "slug": "frontend", "name": "Frontend" },
      "tags": [
        {
          "id": 1,
          "name": "HTML",
          "slug": "html"
        },
        {
          "id": 2,
          "name": "CSS",
          "slug": "css"
        },
        {
          "id": 4,
          "name": "Javascript",
          "slug": "javascript"
        }
      ]
    },
    {
      "id": 2,
      "title": "GChairs",
      "link": null,
      "slug": "gchairs",
      "excerpt": "A C# application that allows users to browse and purchase chairs from a catalog.",
      "body": "GChairs was developed in .NET Core using C# and a SQL Server database. The application allows users to browse and purchase chairs from a catalog. Users can view chair details, add chairs to their cart, and complete the checkout process with Paypal. The application includes user authentication and authorization, as well as an admin interface for managing products and orders. GChairs demonstrates the use of MVC architecture, entity framework, and LINQ queries.",
      "url": null,
      "published_date": null,
      "home_image": "GChairs-Lt.png",
      "image": "GChairs.png",
      "thumb": null,
      "category_id": 3,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 2, "slug": "backend", "name": "Backend" },
      "tags": [
        {
          "id": 5,
          "name": "C#",
          "slug": "csharp"
        },
        {
          "id": 7,
          "name": "Database",
          "slug": "database",
        }
      ]
    },
    {
      "id": 3,
      "title": "React Calculator",
      "link": null,
      "slug": "react-calculator",
      "excerpt": 'A React application that showcases the use of React components, state management, and event handling.',
      "body": "The React Calculator application was developed to showcase the use of React components, state management, and event handling. The calculator allows users to perform basic arithmetic operations, such as addition, subtraction, multiplication, and division. The application includes a display area to show the current input and result, as well as buttons for entering numbers and operators. The React Calculator demonstrates the use of React hooks, such as useState and useEffect, to manage component state and side effects.",
      "url": null,
      "published_date": null,
      "home_image": "ReactCalculator-Lt.png",
      "image": "ReactCalculator.png",
      "thumb": null,
      "category_id": 3,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 1, "slug": "frontend", "name": "Frontend" },
      "tags": [
        {
          "id": 2,
          "name": "CSS",
          "slug": "css"
        },
        {
          "id": 6,
          "name": "React",
          "slug": "react"
        }
      ]
    },
    {
      "id": 4,
      "title": "KJJN Movie Database",
      "link": "https://movieapp.nigelbrown.lol/",
      "slug": "kjjn-movie-database",
      "excerpt": 'A React application that integrates with The Movie Database API to fetch movie data.',
      "body": 'KJJN Movie Database was created with React and demonstrated the use of React components, state management, and API integration. The application allows users to search for movies by title, view movie details, and save movies to a favorites list or watch later list. The application integrates with The Movie Database API to fetch movie data, including titles, posters, and plot summaries. KJJN Movie Database showcases the use of React hooks, such as useState and useEffect, to manage component state and side effects.',
      "url": null,
      "published_date": null,
      "home_image": "KJJNDb-Lt.png",
      "image": "KJJNMovieDb.png",
      "thumb": null,
      "category_id": 1,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 1, "slug": "frontend", "name": "Frontend" },
      "tags": [
        {
          "id": 1,
          "name": "HTML",
          "slug": "html"
        },
        {
          "id": 2,
          "name": "CSS",
          "slug": "css"
        },
        {
          "id": 4,
          "name": "Javascript",
          "slug": "javascript"
        },
        {
          "id": 6,
          "name": "React",
          "slug": "react"
        },
        {
          "id": 7,
          "name": "Database",
          "slug": "database"
        }
      ]
    },
    {
      "id": 5,
      "title": "Tourism Minisite",
      "link": null,
      "slug": "tourism-minisite",
      "excerpt": "The Tourism Minisite is a static webpage display a showcase of HTML and CSS.",
      "body": "The Tourism Minisite was developed to showcase the use of HTML and CSS to create a responsive website layout. The minisite includes a homepage, about page, and contact page, each with a unique design and layout. The minisite demonstrates the use of CSS flexbox and grid to create responsive and visually appealing page layouts. The Tourism Minisite is fully responsive and optimized for desktop, tablet, and mobile devices.",
      "url": null,
      "published_date": null,
      "home_image": "TourismSite-Lt.png",
      "image": "TourismSite.png",
      "thumb": null,
      "category_id": 1,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 1, "slug": "frontend", "name": "Frontend" },
      "tags": [
        {
          "id": 1,
          "name": "HTML",
          "slug": "html"
        },
        {
          "id": 2,
          "name": "CSS",
          "slug": "css"
        }
      ]
    },
    {
      "id": 6,
      "title": "Food Explorer",
      "link": null,
      "slug": "food-explorer",
      "excerpt": "A fully responsive static webpage displaying a showcase of HTML and use of SASS.",
      "body": "Food Explorer is a static webpage developed to showcase the use of HTML and SASS to create a visually appealing and responsive design. The webpage features a grid layout with images and text, as well as hover effects and transitions to enhance the user experience. The Food Explorer webpage is fully responsive and optimized for desktop, tablet, and mobile devices. The webpage demonstrates the use of SASS variables, mixins, and nesting to create modular and maintainable stylesheets.",
      "url": null,
      "published_date": null,
      "home_image": "FoodExplorer-Lt.png",
      "image": "FoodExplorer.png",
      "thumb": null,
      "category_id": 1,
      "created_at": "2023-02-23T22:31:23.000000Z",
      "updated_at": "2023-02-23T22:31:23.000000Z",
      "category": { "id": 1, "slug": "frontend", "name": "Frontend" },
      "tags": [
        {
          "id": 1,
          "name": "HTML",
          "slug": "html"
        },
        {
          "id": 3,
          "name": "SASS",
          "slug": "sass"
        },
      ]
    }
  ];