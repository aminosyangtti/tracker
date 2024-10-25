let currentValue = 0;
        let currentValueOne = 0;
        let currentValueTwo = 0;

        function increment(value) {
            currentValue += value;
            document.getElementById('displayText').innerText = currentValue;
		showNotification(value, 1, true)
        }

        function decrement(value) {
            currentValue -= value;
            document.getElementById('displayText').innerText = currentValue;
		showNotification(value, 1, false)
        }

        function reset() {
            currentValue = 0;
            document.getElementById('displayText').innerText = currentValue;
        }

        function incrementOne() {
            currentValueOne += 1;
            document.getElementById('displayTextOne').innerText = currentValueOne;
		showNotification(1, 2, true)
        }

        function decrementOne() {
            currentValueOne -= 1;
            document.getElementById('displayTextOne').innerText = currentValueOne;
		showNotification(1, 2, false)

        }

        function resetOne() {
            currentValueOne = 0;
            document.getElementById('displayTextOne').innerText = currentValueOne;
        }

        function incrementTwo() {
            currentValueTwo += 1;
            document.getElementById('displayTextTwo').innerText = currentValueTwo;
		showNotification(1, 3, true)
        }

        function decrementTwo() {
            currentValueTwo -= 1;
            document.getElementById('displayTextTwo').innerText = currentValueTwo;
		showNotification(1, 3, false)
        }

        function resetTwo() {
            currentValueTwo = 0;
            document.getElementById('displayTextTwo').innerText = currentValueTwo;
        }
         document.addEventListener('keydown', function(event) {
            switch (event.code) {
                case 'Digit1':
                    increment(1);
                    break;
                case 'Digit2':
                    increment(2);
                    break;
                case 'Digit3':
                    increment(3);
                    break;
                case 'Digit4':
                    increment(4);
                    break;
                case 'Digit5':
                    increment(5);
                    break;
                case 'Digit6':
                    increment(6);
                    break;
                case 'Digit7':
                    increment(7);
                    break;
                case 'Digit8':
                    increment(8);
                    break;

		case 'KeyZ':
                    increment(8);
                    break;

		case 'KeyA':
                    incrementOne();
                    break;
		case 'KeyQ':
                    incrementTwo();
                    break;
		case 'Digit0': //reset all
                    reset();
		    resetOne();
		    resetTwo();
			
                    break;
                default:
                    break;
            }
        });
function showNotification(number, counter, increment) {
	let notification;
	switch (counter) {
		case 1:
			notification = document.getElementById('notification');
			 break;
		case 2:
			notification = document.getElementById('notification2');
			 break;
		case 3:
			notification = document.getElementById('notification3');
			 break;
		default:
			break;
	}
  
 
  notification.style.opacity = 1
  notification.style.backgroundColor = increment ? '#4d4d4d' : '#9f4c4c'
  notification.style.color = '#f8f8f8'

  notification.innerText = increment ? `+${number}` : `-${number}`
  setTimeout(() => {
    notification.style.opacity = 0
  	

  }, 500);
}
