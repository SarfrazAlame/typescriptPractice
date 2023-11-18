

// function getFirstNumber<T>(arr: T[]):T {
//     return arr[0]
// }

// const ans = getFirstNumber([1, 2, 3])
// const ans2 = getFirstNumber(['one', 'two', 'three'])

// console.log(ans)
// console.log(ans2)

interface Todo {
    title:string,
    description:string,
    id:number,
    done:boolean
}

type UpdateTodoInput = Partial<Todo >

function swap<T, U>(a: T, b: U): [U, T] {
    return [b, a]
}

const ans1 = swap(2, true)
const ans2 = swap("one", 2)
console.log(ans1)
console.log(ans2)