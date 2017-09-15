// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    //应用于每个实例的变量都在这里，我们为您提供了一个入门

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    //我们的敌人的图像/精灵，这使用我们提供的帮助器轻松加载图像
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
//更新敌人的位置，游戏所需的方法
// Parameter: dt, a time delta between ticks
//参数：dt，刻度之间的时间差
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //您应该将任何运动乘以dt参数，以确保游戏以相同的速度运行所有计算机。
};

// Draw the enemy on the screen, required method for game
//在屏幕上绘制敌人，需要游戏方法
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//现在写你自己的玩家类
//这个类需要一个update（），render（）和一个handleInput（）方法。

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//现在实例化你的对象。
//将所有敌方对象放在名为allEnemies的数组中
//将播放器对象放在名为播放器的变量中


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
//它监听按键，并将键发送到您的Player.handleInput（）方法。 你不需要修改这个。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
