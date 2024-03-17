export const validateRegisterInput = (username, email, password)=>{
    const errors = {}

    if(username.trim() === ''){
        errors.username = 'Username should not be empty';
    }
    if(email.trim() === ''){
        errors.email = 'Email should not be empty';
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w][0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if(!email.match(regEx)){
            errors.email = 'Email should be valid format'
        } 
    }
    if(password === ''){
        password.errors = 'Password should not be empty'
    }

    return {errors, valid: Object.keys(errors).length < 1}
}

export const validateLoginInput = (email, password)=>{
    const errors = {}

    if(email.trim() === ''){
        errors.email = 'Email should not be empty';
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w][0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if(!email.match(regEx)){
            errors.email = 'Email should be valid format'
        } 
    }
    if(password === ''){
        password.errors = 'Password should not be empty'
    }

    return {errors, valid: Object.keys(errors).length < 1}
}

