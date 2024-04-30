let input = prompt("what would u like to do");
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== "quit") {
    if (input === 'list') {
        console.log("*****************")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*****************")
    }
    else if (input === "new") {
        const newToDo = prompt("Ok, what is your new todo");
        todos.push(newToDo);
        console.log(`${newToDo} added to the list!`);
    }
    else if (input === "delete") {
        const index = parseInt(prompt("Ok, enter an index to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok,deleted ${deleted[0]}`);
        }
        else {
            console.log('Unknown index');
        }
    }
    input = prompt("what would u like to do")
}
console.log("Ok QUIT THE APP");