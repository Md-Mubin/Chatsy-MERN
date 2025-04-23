const emailValid = (userEmail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
        return (true)
    }else{
        return (false)
    }
}

module.exports = emailValid