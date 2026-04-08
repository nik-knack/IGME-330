/*
  #1 - Create an interface that describes the structure of the item objects in the `todoItems` array
  Then strongly type the `todoItems` array
*/
interface TodoItem {
  id: number; 
  title: string;
  status: Status;
  completedOn?: Date;
}

/*
  #2 - Strongly type the `status` property with an enum
  Note the `status` values below: "done", "in-progess" etc
*/
enum Status {
  Done = 'done',
  InProgress = 'in-progess',
  Todo = 'todo'

}

const todoItems: TodoItem[] = [
    { id: 1, title: "Learn HTML", status: Status.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: Status.InProgress },
    { id: 3, title: "Write the best web app in the world", status: Status.Todo },
]

/*
  #3 - Strongly type the parameters and return values of `addTodoItem()` and `getNextId()`
*/
function addTodoItem(todo: string): TodoItem {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: Status.Todo,
    }

    todoItems.push(newTodo);

    return newTodo;
}

function getNextId(items: TodoItem[]): number {
    return items.reduce((max: number, x: TodoItem) => x.id > max ? x.id : max, 0) + 1;
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");

console.log(JSON.stringify(newTodo));