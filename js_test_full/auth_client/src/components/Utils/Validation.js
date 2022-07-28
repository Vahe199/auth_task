export default function validate(name, email, password) {
    // we are going to store errors for all fields
    // in a signle array
    let errors =
        {
            name:'',
            email:'',
            pass:''
        };

    if (name.length === 0) {
        errors.name = "Name can't be empty";
    }

    if (email.length < 5) {
        errors.email = "Email should be at least 5 charcters long";
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
        errors.email = "Email should contain a @";
    }
    if (email.indexOf(".") === -1) {
        errors.email = "Email should contain at least one dot";
    }

    if (password.length < 6) {
        errors.pass = "Password should be at least 6 characters long";
    }

    return errors;
}
