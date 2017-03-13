// const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// console.log(svg);
// const SEGMENT_WIDTH = 25;
// const SEGMENT_HEIGHT = 25;
// const Snake = (x, y) => {
//     let currentDirection = "RIGHT";
//     return {
//         setDirection: (direction) => { currentDirection = direction },
//         advance : () => {
//             console.log(currentDirection, x, y);
//             switch(currentDirection){
//                 case "RIGHT":
//                     x+=10;
//                     break;
//                 case "LEFT":
//                     x-=10;
//                     break;
//                 case "DOWN":
//                     y-=10;
//                     break;
//                 case "UP":
//                     y+=10;
//                     break;
//                 case "PAUSE":
//                     return ""
//             }
//         },
//         draw: () => {
//             let snakeHead = document.createElement("http://www.w3.org/2000/svg", 'rect');
//             snakeHead.setAttribute("id", "snake-head");
//             snakeHead.setAttribute("width", SEGMENT_WIDTH);
//             snakeHead.setAttribute("height", SEGMENT_HEIGHT);
//             snakeHead.setAttribute("x", x);
//             snakeHead.setAttribute("y", y);
//             // snakeHead.style = "stroke: #009900; stroke-width: 3; fill: none;";
//             document.getElementById("game-container").appendChild(snakeHead);
//             console.log(snakeHead);
//         }
//     }
// }
// let snake = Snake(5,5);
// // Ruby should be the body of the snake...

// let board = [];
// let directions = {
//     LEFT : 37,
//     UP: 38,
//     DOWN: 40,
//     RIGHT: 39,
//     SPACE: 32
// };

// let onTimerTick = () => {
//     snake.advance();
//     snake.draw();
// }
// let gameLoop = setInterval(onTimerTick, 33); // 33 milliseconds = ~ 30 frames per sec
// let gameState = "RUNNING";
// console.log(gameState);

// document.onkeydown = (e) => {
//     e = e || window.event;
//     switch(e.keyCode){
//         case directions.LEFT:
//             snake.setDirection("LEFT");
//             break;
//         case directions.UP:
//             snake.setDirection("UP");
//             break;
//         case directions.RIGHT:
//             snake.setDirection("RIGHT");
//             break;
//         case directions.DOWN:
//             snake.setDirection("DOWN");
//             break;
//         case directions.SPACE:
//             gameState = (gameState === "PAUSED") ? "RUNNING" : "PAUSED";
//             console.log(gameState);
//             if (gameState === "PAUSED"){
//                 clearInterval(gameLoop);
//             }
//             else {
//                 gameLoop = setInterval(onTimerTick, 2000); // 33 milliseconds = ~ 30 frames per sec
//             }
//     }
// };

const linkedList = () => {
    let head = null;
    return {
        head: null,
        push: (value) => {
      	    let node = {
        	    next: null,
                value: value
            }
          	if (head == null) {
            	head = node;
            }
            else {
        	    let current = head;
                while(current.next){
          	        current = current.next;
                }
                current.next = node;
            }
        },
        getHead: () => { return head; }
    }
}

let ll = linkedList();
ll.push(2);
ll.push(3);
ll.push(4);
ll.push(5);

// console.log(ll.getHead());
// console.log(ll.getHead().next);
// console.log(ll.getHead().next.next);
// console.log(ll.getHead().next.next.next);
// console.log(ll.getHead().next.next.next.next);