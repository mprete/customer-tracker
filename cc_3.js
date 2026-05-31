const customers = [
    {
        name: "Mackenzie Prete",
        email: "mackenzie.prete@email.com",
        purchases: ["Laptop", "Mouse", "Monitor"]
    },
    {
        name: "John Smith",
        email: "John.Smith@email.com",
        purchases: ["Monitor", "Keyboard", "Mouse"]
    },
    {
        name: "Rachel Johnson",
        email: "Rachel.Johnson@email.com",
        purchases: ["Desk", "Desk Lamp", "Charger"]
    },
    {
        name: "Anna Nesbitt",
        email: "anna.nesbitt@email.com",
        purchases: ["Phone", "Phone Case", "AirPods"]
    }
];

customers.push({
    name: "Matthew Wilson",
    email: "matthew.wilson@email.com",
    purchases: ["Phone", "Laptop"]
    });

customers.shift();

customers[0].email = "johnsmith@email.com";

customers[1].purchases.push("Phone");

customers.forEach(function(customer) {
    console.log(`Name: ${customer.name}  Email: ${customer.email}  Total Purchases: ${customer.purchases.length}`);
});
