class User{
    constructor({username, email, password, roles}){
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = roles||['user']; // Default role is 'user'
    }
}
module.exports = User;