let currentValue = 0;
        let currentValueOne = 0;
        let currentValueTwo = 0;

        function increment(value) {
            currentValue += value;
            document.getElementById('displayText').innerText = currentValue;
        }

        function decrement(value) {
            currentValue -= value;
            document.getElementById('displayText').innerText = currentValue;
        }

        function reset() {
            currentValue = 0;
            document.getElementById('displayText').innerText = currentValue;
        }

        function incrementOne() {
            currentValueOne += 1;
            document.getElementById('displayTextOne').innerText = currentValueOne;
        }

        function decrementOne() {
            currentValueOne -= 1;
            document.getElementById('displayTextOne').innerText = currentValueOne;
        }

        function resetOne() {
            currentValueOne = 0;
            document.getElementById('displayTextOne').innerText = currentValueOne;
        }

        function incrementTwo() {
            currentValueTwo += 1;
            document.getElementById('displayTextTwo').innerText = currentValueTwo;
        }

        function decrementTwo() {
            currentValueTwo -= 1;
            document.getElementById('displayTextTwo').innerText = currentValueTwo;
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
