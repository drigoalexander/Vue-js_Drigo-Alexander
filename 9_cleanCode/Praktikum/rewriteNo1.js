class user {
    constructor(){
        this.id;
        this.username;
        this.password;
    }
}

class userService extends user{
    
    constructor(){
        super();
        this.users = []
    }
    

    getUsers(){
        return this.users;
    }

    getUserById(ID) {
        return this.users.filter(ID)
    }
}