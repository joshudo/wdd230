const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function (){
    if(input.value === ''){
        alert('Please fill the required field');
    } else {
        let listItem = document.createElement('li');
        let deleteBtn = document.createElement('button');
        let listContent = document.createElement('p');

        listItem.append(listContent);
        listContent.textContent = input.value;
        listItem.append(deleteBtn);
        deleteBtn.textContent = "X";

        list.append(listItem);

        deleteBtn.addEventListener('click', function(){
            list.removeChild(listItem);
        });
        
        input.value = ""

        input.focus();
    }    

    }
)