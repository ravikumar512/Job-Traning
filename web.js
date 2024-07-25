document.addEventListener('DOMContentLoaded', function() {
    const flavors = ['Vanilla', 'Chocolate', 'Strawberry', 'Mint', 'Cookie Dough'];

    const flavorList = document.getElementById('flavor-list');
    flavors.forEach(function(flavor) {
        const listItem = document.createElement('li');
        listItem.textContent = flavor;
        flavorList.appendChild(listItem);
        listItem.addEventListener('click', function() {
            addToOrder(flavor);
        });
    });

    const orderList = document.getElementById('order-list');

    function addToOrder(flavor) {
        const orderItem = document.createElement('li');
        orderItem.textContent = flavor;
        orderList.appendChild(orderItem);
    }

    document.getElementById('submit-order').addEventListener('click', function() {
        alert('Thank you for your order!');
        orderList.innerHTML = ''; // Clear the order list after submitting
    });
});