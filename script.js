const foods = {

    noodles: {
        name: "Special Noodles",
        price: "₹120",
        tag: "POPULAR",
        description:
            "Wok-tossed noodles with fresh vegetables and delicious sauces.",
        special:
            "Our chef's special sauce gives the noodles a unique restaurant-style flavour.",
        ingredients:
            "Noodles, cabbage, carrot, capsicum, garlic, spring onion and special sauce."
    },

    friedrice: {
        name: "Special Fried Rice",
        price: "₹140",
        tag: "CHEF'S PICK",
        description:
            "Aromatic fried rice cooked with fresh vegetables and special seasoning.",
        special:
            "Prepared fresh in a hot wok to create a delicious smoky flavour.",
        ingredients:
            "Rice, carrot, beans, cabbage, capsicum, garlic, spring onion and seasoning."
    },

    manchurian: {
        name: "Veg Manchurian",
        price: "₹130",
        tag: "🔥 SPICY",
        description:
            "Crispy vegetable balls served with a delicious sweet and spicy Manchurian sauce.",
        special:
            "Our homemade Manchurian sauce gives this dish its perfect sweet, spicy and tangy taste.",
        ingredients:
            "Mixed vegetables, corn flour, garlic, ginger, spring onion and Manchurian sauce."
    },

    cola: {
        name: "Chilled Cola",
        price: "₹50",
        tag: "REFRESHING",
        description:
            "An ice-cold and refreshing soft drink that goes perfectly with spicy food.",
        special:
            "Served chilled for the perfect refreshing experience.",
        ingredients:
            "Carbonated soft drink and ice."
    },

    juice: {
        name: "Fresh Fruit Juice",
        price: "₹80",
        tag: "FRESH",
        description:
            "A refreshing fruit drink prepared with fresh seasonal fruits.",
        special:
            "Freshly prepared when ordered for a natural and refreshing taste.",
        ingredients:
            "Fresh seasonal fruits and chilled water."
    },

    water: {
        name: "Mineral Water",
        price: "₹20",
        tag: "ESSENTIAL",
        description:
            "Chilled packaged drinking water for a refreshing experience.",
        special:
            "Served chilled on request.",
        ingredients:
            "Packaged drinking water."
    }

};


/* =====================================
   SHOW SPECIALS
===================================== */

function showDetails(foodId) {

    const food = foods[foodId];

    if (!food) {
        return;
    }

    // Dish name
    document.getElementById("detailName").textContent =
        food.name;

    // Price
    document.getElementById("detailPrice").textContent =
        food.price;

    // Tag
    document.getElementById("detailTag").textContent =
        food.tag;

    // Description
    document.getElementById("detailDescription").textContent =
        food.description;

    // Chef's Special
    document.getElementById("detailSpecial").textContent =
        food.special;

    // Ingredients
    document.getElementById("detailIngredients").textContent =
        food.ingredients;

    // Open popup
    document.getElementById("foodModal")
        .classList.add("show");
}


/* =====================================
   CLOSE POPUP
===================================== */

function closeModal(id) {

    document.getElementById(id)
        .classList.remove("show");
}


/* =====================================
   SEARCH FOOD
===================================== */

function searchFood() {

    const search =
        document.getElementById("searchInput")
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


/* =====================================
   CATEGORY FILTER
===================================== */

function filterFood(category, button) {

    const cards =
        document.querySelectorAll(".food-card");

    // Remove active from all buttons
    document.querySelectorAll(".category")
        .forEach(btn => {

            btn.classList.remove("active");

        });

    // Add active to selected button
    button.classList.add("active");


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


/* =====================================
   OPEN QR MODAL
===================================== */

function openQR() {

    document.getElementById("qrModal")
        .classList.add("show");
}


/* =====================================
   GENERATE QR CODE
===================================== */

function generateQR() {

    const url =
        document.getElementById("websiteURL")
        .value
        .trim();

    if (url === "") {

        alert("Please enter your restaurant website URL.");

        return;
    }


    // Check valid URL
    try {

        new URL(url);

    } catch {

        alert("Please enter a valid URL.");

        return;
    }


    const qrContainer =
        document.getElementById("qrcode");

    // Remove old QR
    qrContainer.innerHTML = "";


    // Generate new QR
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


/* =====================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
===================================== */

document.querySelectorAll(".modal")
    .forEach(modal => {

        modal.addEventListener("click", function(event) {

            if (event.target === modal) {

                modal.classList.remove("show");

            }

        });

    });


/* =====================================
   ESC KEY CLOSE
===================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        document.querySelectorAll(".modal")
            .forEach(modal => {

                modal.classList.remove("show");

            });

    }

});