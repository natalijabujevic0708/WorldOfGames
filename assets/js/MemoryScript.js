$(document).ready(function() {
    //Memory game 

    const cards = document.querySelectorAll('.memory-card');
    let lockBoard = false;
    let hasFlippedCard = false;
    let firstCard, secondCard
    let countClicks=0;
    let match = 0;

    //function to flip the cards
    function flipCard(){ 
        if (lockBoard) return;
        if (this === firstCard) return;
        countClicks++
        $(this).children('.front-face').toggleClass('visibility')
        $(this).children('.back-face').toggleClass('visibility')
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }else{
            secondCard = this;
            lockBoard = true;
            checkForMatch();
        }
        
    };

    //check the cards
    function checkForMatch() {
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            match++
            if (match==6){
                $("#memoryPage").html(`   
                <div class="congratulations">
                    <h2>Congratulations!!</h2>
                    <p>You matched all of the pictures correctly!</p>
                    <p> It took you ${countClicks/2} tries.</p>
                    <button type="button" class="btn btn-info buttons"><a href="index.html">Home</button>   
                </div>`).addClass("backgroundHome").removeClass("memory-game");
                return match, countClicks = 0;
            }else{
                disableCards();
            }
        }else{
            unflipCards();
        }
        
    };

   // if the match was made
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
    }
    //if the match was not made
    function unflipCards() {
        setTimeout(() => {
            $(firstCard).children('.front-face').toggleClass('visibility')
            $(firstCard).children('.back-face').toggleClass('visibility')
            $(secondCard).children('.front-face').toggleClass('visibility')
            $(secondCard).children('.back-face').toggleClass('visibility');
            resetBoard();
        }, 1500);
    }
    
    //after the check
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    };

    //function to shuffle cards
    (function shuffle() {
        cards.forEach(card => {
            let ramdomPos = Math.floor(Math.random() * 12);
            card.style.order = ramdomPos;
        });
    })(); 

    cards.forEach(card => card.addEventListener('click', flipCard));
   
});
    
