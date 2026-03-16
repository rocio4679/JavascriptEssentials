let count = 0;

function increaseCount() {
    count++; //Increment the count by 1
    displayCount(); //Displays the count
    checkCountValue(); //Checks followers
}

function resetCount() {
    const resetCount = 0; 
    count = 0; 
    document.getElementById('countDisplay').innerHTML = resetCount; 
    checkCountValue(); 
}

function checkCountValue() {
    if(count === 0) {
        alert("Your Instagram post count has been reset!");
    } else if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; //Display
}