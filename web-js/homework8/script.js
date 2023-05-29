document.addEventListener("DOMContentLoaded", () => {
    const inputContainer = document.querySelector(".input-container");
    const priceInput = document.getElementById("priceInput");

    priceInput.addEventListener("focus", () => {
        priceInput.classList.remove("error");

        const error = document.querySelector(".error");

        if (error) inputContainer.removeChild(error);
    });

    priceInput.addEventListener("blur", () => {
        const priceValue = parseFloat(priceInput.value);

        if (isNaN(priceValue) || priceValue < 0) {
            priceInput.classList.add("error");
            showError("Please enter correct price");
        } else {
            const priceSpan = document.querySelector(".price-span");

            if (priceSpan) {
                showPrice(priceValue, true);
            } else {
                showPrice(priceValue);
            }
        }
    });

    const showPrice = (price, update = false) => {
        if (update) {
            const text = document.querySelector(".price-span").firstChild;
            text.textContent = "Ціна: " + price;
            return;
        }

        const div = document.createElement("div");
        const priceSpan = document.createElement("span");
        const text = document.createElement("p");

        text.style.display = "inline";

        priceSpan.classList.add("price-span");
        text.textContent = "Ціна: " + price;

        const closeButton = document.createElement("button");
        closeButton.textContent = "X";
        closeButton.addEventListener("click", () => {
            inputContainer.removeChild(div);
            priceInput.value = "";
            priceInput.style.color = "";
        });

        priceSpan.appendChild(text);
        priceSpan.appendChild(closeButton);

        div.appendChild(priceSpan);

        inputContainer.insertBefore(div, priceInput);

        priceInput.style.color = "green";
    }

    const showError = (errorMessage) => {
        const errorSpan = document.createElement("span");
        errorSpan.classList.add("error");
        errorSpan.textContent = errorMessage;
        inputContainer.appendChild(errorSpan);

        priceInput.style.color = "";
    }
});