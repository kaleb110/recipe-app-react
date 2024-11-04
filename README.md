# 🍽️ Meals App

Welcome to the Meals App! This is a containerized React-based web application that allows users to search for meals and recipes from an extensive database. Whether you're looking for inspiration for your next meal or searching for a specific recipe, the Meals App has got you covered.

![Meals Website](https://i.postimg.cc/7PGKbp3W/Screenshot-2024-06-25-230130.png)

## 🚀 Features

- **Search by Meal Name:** Easily search for meals by their names.
- **Browse by Letter:** Explore meals categorized by their alphabets.
- **Smooth Loading:** Enjoy a seamless user experience with smooth loading indicators.
- **Responsive Design:** Fully responsive design ensures a great experience on both desktop and mobile devices.

## 🛠️ Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **React Router:** Declarative routing for React applications.
- **Vite:** A fast build tool and development server for modern web projects.
- **Docker:** A containerization tool used to make development and deployment efficient.
- **Nginx:** A web server used to serve static assets like HTML, CSS, and JavaScript.
- **TheMealDB API:** An open API providing meal and recipe data.

## 🔧 Installation and Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/kaleb110/meals-app.git
    cd meals-app
    ```

2. **Build the application:**
    If you haven't already built the Docker image, you can do so by running:
    ```bash
    docker build -t meals-app .
    ```

3. **Run the application:**
    You can run the application using Docker:
    ```bash
    docker run -p 3000:3000 meals-app
    ```

4. **Access the application:**
    After the app is running, open your browser and go to:
    ```bash
    http://localhost:3000
    ```

## 🌐 Live Demo

Check out the live demo of the Meals App [here](https://recipe-app-lb96.onrender.com/).

## 📚 API Reference

The Meals App uses the [TheMealDB API](https://www.themealdb.com/api.php) to fetch meal and recipe data. Visit their documentation to learn more about the available endpoints and data structure.

## 👩‍💻 Contributing

Contributions are welcome! If you have any ideas, suggestions, or issues, please open an issue or submit a pull request.


## 📞 Contact

If you have any questions or want to reach out, feel free to contact me at [kalisha123k@gmail.com](mailto:kalisha123k@gmail.com).

---

Thank you for checking out the Meals App! I hope you find it useful and enjoyable. Happy cooking! 🍳
