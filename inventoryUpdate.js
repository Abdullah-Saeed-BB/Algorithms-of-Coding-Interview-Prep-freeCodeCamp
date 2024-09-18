/*
Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array.
*/

function updateInventory(arr1, arr2) {
  let inventory = arr1;

  for (let [quantity, itemName] of arr2) {
    let itemIndex = inventory.map((i) => i[1]).indexOf(itemName);

    if (itemIndex === -1) {
      // the item is new
      inventory.push([quantity, itemName]);
    } else {
      // the item already exist in the inventory
      let itemQuantity = inventory[itemIndex][0];
      inventory[itemIndex] = [itemQuantity + quantity, itemName];
    }
  }

  inventory = inventory.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    } else if (a[1] < b[1]) {
      return -1;
    } else {
      return 0;
    }
  });

  return inventory;
}
