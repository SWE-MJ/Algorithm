function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}

UserCreator.prototype.increment = function() {

    let that = this;
    function add1() {
        that.score++;
    }
    add1();
    // const add1 = () => {
    //     this.score++;
    // }
    // add1();
}

UserCreator.prototype.login = function() {
    console.log('login');
}

const user1 = new UserCreator('Eva', 9);
user1.increment();
console.log(user1);