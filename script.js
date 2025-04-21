document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  let count = getCookie('count');
  // 2. If the cookie exists, increment the value and update the cookie
  if (count) {
    count = parseInt(count) + 1;
  }
  // 3. If the cookie does not exist, create it and set the value to 1
  else {
    count = 1;
  }
  setCookie('count', count, 30);
  // 4. Display the count on the webpage
  const counterElement = document.createElement('div');
  counterElement.id = 'cookie-counter';
  counterElement.style.position = 'fixed';
  counterElement.style.bottom = '20px';
  counterElement.style.right = '20px';
  counterElement.style.padding = '10px 20px';
  counterElement.style.backgroundColor = '#f0f0f0';
  counterElement.style.borderRadius = '5px';
  counterElement.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
  counterElement.textContent = `Page visits: ${count}`;
  
  document.body.appendChild(counterElement);

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset Counter';
  resetButton.style.marginLeft = '10px';
  resetButton.style.padding = '5px 10px';
  resetButton.style.cursor = 'pointer';
  
  resetButton.addEventListener('click', function() {
    setCookie('count', 0, 30);
    counterElement.textContent = 'Page visits: 0';
  });
  
  counterElement.appendChild(resetButton);

  // Log to console for debugging
  console.log(`Current visit count: ${count}`);
});

  // your code here

