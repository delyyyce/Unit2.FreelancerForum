document.title = 'Freelancer Listings'

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer"},
    { name: "Carol", price: 70, occupation: "programmer"},
    { name: "Bob", price: 50, occupation: "teacher"},
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" }
];
let totalFreelancers = freelancers.length;
let totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
function updateFreelancerList() {
    const freelancerList = document.getElementById('freelancer-list');
    freelancerList.innerHTML = ''; 

    freelancers.forEach(freelancer => {
        const listItem = document.createElement('li');
        listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - Starting Price: $${freelancer.price}`;
        freelancerList.appendChild(listItem);
    });
    updateAveragePrice();
}
function updateAveragePrice() {
    const avgPriceElement = document.getElementById('avg-price');
    const averagePrice = (totalPrice / totalFreelancers).toFixed(2);
    avgPriceElement.textContent = averagePrice;
}
function addFreelancer(name, occupation, price) {
    freelancers.push({ name, occupation, price });
    totalFreelancers++;
    totalPrice += price;
    updateFreelancerList();
}
setTimeout(() => addFreelancer("Carol", "Programmer", 70), 3000);
setTimeout(() => addFreelancer("Dave", "Designer", 40), 6000);
setTimeout(() => addFreelancer("Eve", "Developer", 60), 9000);