// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
        addFood(steak[3], '#steak', () => {
          addFood(steak[4], '#steak', () => {
            addFood(steak[5], '#steak', () => {
              addFood(steak[6], '#steak', () => {
                addFood(steak[7], '#steak', () => {
                  let imageSteak = document.createElement('img');
                  imageSteak.src = "./public/images/steak.jpg"
                  document.getElementById('table').appendChild(imageSteak);
                });
              });
            });
          });
        });
      });
  });
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes')

  addFood(mashPotatoes[2], '#mashPotatoes')
  addFood(mashPotatoes[3], '#mashPotatoes')
  addFood(mashPotatoes[4], '#mashPotatoes')
  let imageSmash = document.createElement('img');
  imageSmash.src = "./public/images/mashPotatoes.jpg";
    document.getElementById('table').appendChild(imageSmash);
});

// Iteration 3 using async and await

  async function makeFood(step) {
    // ... your code here
    for (let i = 0; i < step.length; i++) {
        await addFood(step[i], "#brusselSprouts");
      }
    }
    let imageBrussel = document.createElement('img');
    imageBrussel.setAttribute("src", "public/images/brusselSprouts.jpg");
   document.getElementById('table').appendChild(imageBrussel);
  
  makeFood(brusselSprouts);

    