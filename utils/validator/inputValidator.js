const isEmail = (email) => {
    regx = /^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,}$/;
    return regx.test(email)
}

module.exports = { isEmail }