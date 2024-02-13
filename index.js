let knapsack = {
    capacity: 0,
    items: [],
    weight: 0,
    value: 0
};

const allItems = [
    { name: "Laptop", weight: 3, value: 500 },
    { name: "Camera", weight: 2, value: 300 },
    { name: "Headphones", weight: 1, value: 100 },
    { name: "Book", weight: 1, value: 20 },
    { name: "Water Bottle", weight: 1, value: 10 },
    { name: "Snacks", weight: 1, value: 50 },
    { name: "Jacket", weight: 2, value: 150 },
    { name: "Sunglasses", weight: 1, value: 80 },
    { name: "Hat", weight: 1, value: 30 },
    { name: "Sunscreen", weight: 1, value: 40 },
    { name: "Notebook", weight: 1, value: 15 },
    { name: "Pen", weight: 1, value: 5 },
    { name: "Power Bank", weight: 1, value: 70 },
    { name: "Chargers", weight: 1, value: 60 },
    { name: "Map", weight: 1, value: 25 },
    { name: "Umbrella", weight: 2, value: 90 },
    { name: "Hiking Shoes", weight: 2, value: 120 },
    { name: "First Aid Kit", weight: 2, value: 110 },
    { name: "Sleeping Bag", weight: 4, value: 200 },
    { name: "Tent", weight: 5, value: 250 },

];

function initializeItemList() {
    const itemList = document.getElementById('itemList');
    allItems.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.text = `${item.name} (Weight: ${item.weight}, Value: ${item.value})`;
        itemList.add(option);
    });
}

function addItemToKnapsack() {
    const maxWeight = parseInt(document.getElementById('maxWeight').value);
    if (!maxWeight || maxWeight <= 0) {
        alert('Please enter a valid maximum weight.');
        return;
    }

    const selectedItem = allItems.find(item => item.name === document.getElementById('itemList').value);
    if (!selectedItem) {
        alert('Please select an item from the list.');
        return;
    }

    knapsack.capacity = maxWeight;

    if (knapsack.weight + selectedItem.weight <= knapsack.capacity) {
        knapsack.items.push(selectedItem);
        knapsack.weight += selectedItem.weight;
        knapsack.value += selectedItem.value;
        updateKnapsackState();
    } else {
        alert('Cannot add the selected item. It exceeds the knapsack capacity.');
    }
}

function completeKnapsack() {
    updateKnapsackState();
    alert('Knapsack completed. Check the state below.');
}

function updateKnapsackState() {
    const knapsackState = document.getElementById('knapsackState');
    knapsackState.textContent = `
        Capacity: ${knapsack.capacity},
        Items: [${knapsack.items.map(item => item.name).join(', ')}],
        Weight: ${knapsack.weight},
        Value: ${knapsack.value}
    `;
    knapsackState.style.color = knapsack.weight <= knapsack.capacity ? 'green' : 'red';
}

// Initialize the item list on page load
initializeItemList();

