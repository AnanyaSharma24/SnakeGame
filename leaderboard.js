const leaderboard = document.getElementById('leaderboard');

function getLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('leaderboard')) || [];
    return scores.sort((a, b) => b.score - a.score);
}

function addToLeaderboard(score) {
    const name = prompt('Game over! Enter your name:');
    if (!name) return;
    
    const scores = getLeaderboard();
    scores.push({ name, score });
    localStorage.setItem('leaderboard', JSON.stringify(scores));
    displayLeaderboard();
}

function displayLeaderboard() {
    const scores = getLeaderboard();
    leaderboard.innerHTML = '';
    scores.forEach((entry) => {
        const li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.score}`;
        leaderboard.appendChild(li);
    });
}

window.onload = displayLeaderboard;
