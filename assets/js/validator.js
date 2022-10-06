/*Cria o objeto com a função   */
let B7Validator = {
    handleSubmit:(event)=> {
       event.preventDefault();
        //console.log('clicou');

       let send = true;

        let inputs = form.querySelectorAll('input');

        B7Validator.clearErrors();

        for(let i=0; i<inputs.length; i++){
            let input = inputs[i];
            // console.log(input);
            let check = B7Validator.checkInput(input);
            if(check !== true ){
                send = false;
                //exibir o erro
                // console.log(check);
                // alert('campo nao pode ser vazio');
                B7Validator.showError(input, check);
            }
        }

       
        if(send){
            form.submit();
        }

    },

        checkInput:(input)=>{
            let rules = input.getAttribute('data-rules');
            if(rules !== null){
                rules = rules.split('|');
                for (let k in rules){
                    let rDetails = rules[k].split('=');
                    switch(rDetails[0]){
                        case 'required':
                            if(input.value == ''){
                                return 'campo não pode der vazio';
                            }
                        break;

                        //validar a quantidade minima de caracteres
                        case 'min':
                            if(input.value.length < rDetails[1]){
                                return 'Campo tem que ter no mínimo ' +rDetails[1]+ 'caracteres';
                            }
                            break;
                            //valida e-mail
                            case 'email':
                                if(input.value != ''){
                                    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                    if(!regex.test(input.value.toLowerCase())){ //coloca o e-mail en minusculo e se não for válido mostra a mensagem
                                        return 'E-mail inválido';
                                    }   
                                }
                                break;
                    }
                }
            }
            return true;
        },

        //exibir os erros
        showError:(input, error)=>{
            input.style.borderColor= 'red'; //altera a cor da borda para vermelho
            //cria o elemento para exibir a mensagem na tela, pois no html nao foi deixado espaço
            let errorElement = document.createElement('div');
            errorElement.classList.add('error'); //cria a classe erro para a div criada a cima
            errorElement.innerHTML = error; //mensagem que recebe e o proprio error recebido como argumento


            //adicionar o elemento no lugar correto
            input.parentElement.insertBefore(errorElement,input.errorElementSibling);

        },

        clearErrors:()=>{

            //remove a borda de erro dos inputs
            let inputs = form.querySelectorAll('input');
            for(let r = 0;r <inputs.length;r++){
                inputs[r].style = '';
            }


            //remove a mensagem de erro dos campos
            let errorElements = document.querySelectorAll('.error');
            for(let i = 0;i<errorElements.length;i++){
                errorElements[i].remove();
            }
        }


};


let form =document.querySelector('.b7validator');
form.addEventListener('submit', B7Validator.handleSubmit);



// let bot = document.querySelector('#bot');
// bot.addEventListener('click',function(e){
//     e.preventDefault();
//     alert('clicou');
// });