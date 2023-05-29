class User {
    #firstName;
    #lastName;

    constructor(firstName = "", lastName = "") {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get getFirstName() {
        return this.#firstName;
    }

    set setFirstName(value) {
        this.#firstName = value;
    }

    get getLastName() {
        return this.#lastName;
    }

    set setLastName(value) {
        this.#lastName = value;
    }
}

function createNewUser() {
    let firstName = prompt("Enter first name:");
    let lastName = prompt("Enter last name:");

    const newUser = new User();

    newUser.setFirstName = firstName;
    newUser.setLastName = lastName;

    Object.defineProperty(newUser, 'getLogin', {
        value: function () {
            return `${this.getFirstName[0].toLowerCase()}${this.getLastName.toLowerCase()}`;
        }
    });

    return newUser;
}

const user = createNewUser();
console.log(user.getLogin());