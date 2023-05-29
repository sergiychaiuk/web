class User {
    #firstName;
    #lastName;
    #birthday;

    constructor(firstName = "", lastName = "", birthday = "") {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#birthday = birthday;
    }

    getLogin() {
        return `${this.#firstName.charAt(0).toLowerCase()}${this.#lastName.toLowerCase()}`;
    }

    getAge() {
        const today = new Date();
        const birthDate = new Date(this.#birthday);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    getPassword() {
        const firstNameInitial = this.#firstName.charAt(0).toUpperCase();
        const lastNameLower = this.#lastName.toLowerCase();
        const year = (new Date(this.#birthday)).getFullYear();

        return `${firstNameInitial}${lastNameLower}${year}`;
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

    get getBirthday() {
        return this.#birthday;
    }

    set setBirthday(birthday) {
        this.#birthday = birthday;
    }
}

function createNewUser() {
    let firstName = prompt("Enter first name:");
    let lastName = prompt("Enter last name:");
    let birthday = prompt("Enter birthday (in format dd.mm.yyyy):");

    const newUser = new User();

    newUser.setFirstName = firstName;
    newUser.setLastName = lastName;
    newUser.setBirthday = birthday.replace(/\./g, "/");

    return newUser;
}

const user = createNewUser();

console.log(user.getLogin());
console.log(user.getAge());
console.log(user.getPassword());