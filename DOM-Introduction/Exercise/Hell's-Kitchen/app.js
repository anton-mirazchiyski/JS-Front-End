function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const textAreaInput = document.querySelector('#inputs > textarea');
      const bestRestaurantResultElement = document.querySelector('#bestRestaurant > p');
      const workersResultElement = document.querySelector('#workers > p');

      const restaurantsInfo = eval(textAreaInput.value);

      const restaurants = [];

      for (const info of restaurantsInfo) {
         let [restaurantName, workersInfo] = info.split(' - ');
         workersInfo = workersInfo.split(', ');

         const workers = workersInfo.map(workerInfo =>{
            const [workerName, salary] = workerInfo.split(' ');
            return {name: workerName, salary: Number(salary)};
         });

         const restaurant = findRestaurantByName(restaurants, restaurantName);
         if (!restaurant) {
            const newRestaurant = {
               name: restaurantName,
               workers: workers,
            };
            restaurants.push(newRestaurant);
         } else {
            restaurant.workers.push(...workers);
         }

      }
      
      calcAverageSalaries(restaurants);
      const bestRestaurant = determineBestRestaurant(restaurants);
      const bestSalary = getBestSalary(bestRestaurant);
      sortWorkersBySalary(bestRestaurant);

      bestRestaurantResultElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

      workersResultElement.textContent = '';
      bestRestaurant.workers.forEach(worker => workersResultElement.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `);
      
   
      function findRestaurantByName(restaurants, restaurantName) {
         return restaurants.find(restaurant => restaurant.name === restaurantName);
      }

      function calcAverageSalaries(restaurants) {
         for (const restaurant of restaurants) {
            let totalSalary = 0;
            restaurant.workers.forEach(worker => {
               totalSalary += worker.salary;
            });
            restaurant['averageSalary'] = totalSalary / restaurant.workers.length;
         }
      }

      function determineBestRestaurant(restaurants) {
         let bestRestaurant;
         let highestAverageSalary = Number.MIN_SAFE_INTEGER;

         for (const restaurant of restaurants) {
            if (restaurant.averageSalary > highestAverageSalary) {
               highestAverageSalary = restaurant.averageSalary
               bestRestaurant = restaurant;
            }
         }
         return bestRestaurant;
      }

      function getBestSalary(bestRestaurant) {
         const salaries = [];
         bestRestaurant.workers.forEach(worker => {
            salaries.push(worker.salary);
         });

         return Math.max(...salaries);
      }

      function sortWorkersBySalary(bestRestaurant) {
         bestRestaurant.workers.sort((workerOne, workerTwo) => workerTwo.salary - workerOne.salary);
      }
   }
}

// Example inputs

// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]

// ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]
