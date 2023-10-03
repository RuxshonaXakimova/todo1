let boxes = document.querySelector('.boxes')
let wrap = document.querySelector('.wrap')
let blur  = document.querySelector('.blur')
let form = document.forms.todo
let input = form.querySelector('input')
let modal_main = document.querySelector('.modal_main')
let modal_input = document.querySelector('.modal_main input')
let btn_cancel = document.querySelector('.btn_cancel')
let btn_change = document.querySelector('.btn_change')
let h2 = document.querySelector('.modal_main h2')


modal_main.classList.add('none')


let todos = []

form.onsubmit = (e) =>{
    e.preventDefault();

    let todo = {
        id: Math.random(),
        title: input.value,
        time: new Date().getHours() + ":" + new Date().getMinutes(),
        isDone: false
    }

    todos.push(todo)
    reload(todos)
}

reload(todos)

function reload(arr) {
    boxes.innerHTML = ""

    for(let item of arr) {
        let box = document.createElement('div')
        let box_top = document.createElement('div')
        let box_top_p = document.createElement('p')
        let box_button = document.createElement('button')
        let box_bottom_p = document.createElement('p')

        box.classList.add('box')
        box_top.classList.add('box_top')
        box_top_p.innerHTML = item.title
        box_button.innerHTML = "x"
        box_bottom_p.innerHTML = item.time



        box.append(box_top, box_bottom_p)
        box_top.append(box_top_p, box_button)
        boxes.append(box)


        box.ondblclick = () =>{
            h2.innerHTML = `На что вы хотите заменить задачу: ${item.title}`
            modal_main.classList.remove('none')
            blur.classList.add('blur_bg')
            modal_input.value = `${item.title}`
        } 

        btn_cancel.onclick = () => {
            modal_main.classList.add('none')
            blur.classList.remove('blur_bg')
        }

        btn_change.onclick = () =>{
            box_top_p.innerHTML = modal_input.value
            item.title = modal_input.value
            modal_main.classList.add('none')
            blur.classList.remove('blur_bg')
        }
        
        
        box_top_p.onclick = () => {
            item.isDone = !item.isDone
            box_top_p.classList.toggle('done', item.isDone)
        }

    }
}


