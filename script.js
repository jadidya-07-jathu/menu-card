/* =========================
   FOOD DATA
========================= */

const foods = {

    noodles: {
        name: "Special Noodles",
        price: "₹120",
        image: "images/noodles.jpg"
    },

    friedrice: {
        name: "Special Fried Rice",
        price: "₹140",
        image: "images/fried-rice.jpg"
    },

    manchurian: {
        name: "Veg Manchurian",
        price: "₹130",
        image: "images/manchurian.jpg"
    },

    egg: {
        name: "Egg",
        price: "₹20",
        image: "images/egg.jpg"
    },

    doubleegg: {
        name: "Double Egg",
        price: "₹35",
        image: "images/double-egg.jpg"
    },

    chicken: {
        name: "Chicken",
        price: "₹100",
        image: "images/chicken.jpg"
    },

    cola: {
        name: "Chilled Cola",
        price: "₹50",
        image: "images/chilled-cola.jpg"
    },

    water: {
        name: "Mineral Water",
        price: "₹20",
        image: "images/water.jpg"
    }

};


/* =========================
   SHOW PRODUCT
========================= */

function showDetails(foodId) {

    const food = foods[foodId];

    if (!food) {
        return;
    }

    document.getElementById("detailName").textContent =
        food.name;

    document.getElementById("detailPrice").textContent =
        food.price;

    document.getElementById("detailImage").src =
        food.image;

    document.getElementById("detailImage").alt =
        food.name;

    document.getElementById("foodModal")
        .classList.add("show");
}


/* =========================
   CLOSE MODAL
========================= */

function closeModal(id) {

    document.getElementById(id)
        .classList.remove("show");

}


/* =========================
   SEARCH FOOD
========================= */

function searchFood() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    const cards =
        document.querySelectorAll(".food-card");

    cards.forEach(card => {

        const name =
            card.dataset.name.toLowerCase();

        if (name.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================
   CATEGORY FILTER
========================= */

function filterFood(category, button) {

    const cards =
        document.querySelectorAll(".food-card");


    /* Remove active */

    document
        .querySelectorAll(".category")
        .forEach(btn => {

            btn.classList.remove("active");

        });


    /* Add active */

    button.classList.add("active");


    /* Filter */

    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================
   OPEN QR
========================= */

function openQR() {

    document
        .getElementById("qrModal")
        .classList.add("show");

}


/* =========================
   GENERATE QR
========================= */

function generateQR() {

    const url =
        document
            .getElementById("websiteURL")
            .value
            .trim();


    if (url === "") {

        alert(
            "Please enter your restaurant website URL."
        );

        return;

    }


    try {

        new URL(url);

    } catch (error) {

        alert(
            "Please enter a valid URL."
        );

        return;

    }


    const qrContainer =
        document.getElementById("qrcode");


    /* Remove old QR */

    qrContainer.innerHTML = "";


    /* Generate QR */

    new QRCode(qrContainer, {

        text: url,

        width: 220,

        height: 220,

        colorDark: "#20140e",

        colorLight: "#ffffff",

        correctLevel:
            QRCode.CorrectLevel.H

    });

}


/* =========================
   OPEN LOGIN
========================= */

function openLogin() {

    document
        .getElementById("loginModal")
        .classList.add("show");


    setTimeout(() => {

        document
            .getElementById("username")
            .focus();

    }, 200);

}


/* =========================
   LOGIN
========================= */

function loginUser(event) {

    event.preventDefault();


    const username =
        document
            .getElementById("username")
            .value
            .trim();


    const password =
        document
            .getElementById("password")
            .value;


    const message =
        document.getElementById(
            "loginMessage"
        );


    /*
       Demo Login

       Username: ajay
       Password: 1234
    */

    if (
        username === "ajay" &&
        password === "1234"
    ) {

        message.textContent =
            "✓ Login successful!";

        message.className =
            "login-message success";


        setTimeout(() => {

            closeModal("loginModal");

        }, 900);

    } else {

        message.textContent =
            "Invalid username or password.";

        message.className =
            "login-message error";

    }

}


/* =========================
   CLICK OUTSIDE MODAL
========================= */

document
    .querySelectorAll(".modal")
    .forEach(modal => {

        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "show"
                    );

                }

            }
        );

    });


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            document
                .querySelectorAll(".modal")
                .forEach(modal => {

                    modal.classList.remove(
                        "show"
                    );

                });

        }

    }
);
