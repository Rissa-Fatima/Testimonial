(function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text){
        let Immg = `./img/${img}.jpg`
        let customer = new Customer(Immg, name, text)

        customers.push(customer)
    }

    createCustomer(0, 'Alina', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorum sit in molestiae rem et expedita. Optio, eius voluptatem. Voluptates, quidem.')
    createCustomer(1, 'Amy', 'Lorem ipsum dolor sit amet consectetur , eiusluptates, quide voluptatem.adipisicing elit. Recusandae dolorum sit in molestiae rem et expedita. Optio Vom.')
    createCustomer(2, 'John', 'Lorem ipsum dolor sit amet consectetet extes, quidempedita. Optio, eius voluptatem. ur adipisicing elit. Recusandae dolorum sit in molestiae rem Volupta.')
    createCustomer(3, 'Tim', 'Lorem ipsum dolor sit amet consectetur adipisiRecusandae dolorum sit in molestiae rem et expedita. Oates, quidem.ptio, eius voluptacing elit. tem. Volupt')
    createCustomer(4, 'Sayra', ' dolorum sit in molestiae rem et expedita. Optio, eiusLorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatem. Voluptates, quidem.')

    btn.forEach(function(button){
        button.addEventListener('click',function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0){
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent= customers[index].name
                customerText.textContent = customers[index].text
            }
            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length ){
                    index = 0
                }
                
                customerImage.src = customers[index].img
                customerName.textContent= customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })
})()