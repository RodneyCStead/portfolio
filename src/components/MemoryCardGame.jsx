import React, {useState} from 'react';

const MemoryGame = () => {
    const cardImages = ['blue-circle.png', 'green-triangle.png', 'red-square.png', 'yellow-star.png', 'pink-heart'];

    // Function to shuffle an array
    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    // Create initial cards array and shuffle it
    const createShuffledCards = () => {
        const initialCards = [
            {id : 0, image : '/blue-circle.png', isFlipped: false, isMatched: false},
            {id : 1, image : '/green-triangle.png', isFlipped: false, isMatched: false},
            {id : 2, image : '/red-square.png', isFlipped: false, isMatched: false},
            {id : 3, image : '/yellow-star.png', isFlipped: false, isMatched: false},
            {id : 4, image : '/pink-heart.png', isFlipped: false, isMatched: false},
            {id : 5, image : '/blue-circle.png', isFlipped: false, isMatched: false}, 
            {id : 6, image : '/green-triangle.png', isFlipped: false, isMatched: false}, 
            {id : 7, image : '/red-square.png', isFlipped: false, isMatched: false}, 
            {id : 8, image : '/yellow-star.png', isFlipped: false, isMatched: false}, 
            {id : 9, image : '/pink-heart.png', isFlipped: false, isMatched: false}
        ];
        return shuffleArray(initialCards);
    };

    const [cards, setCards] = useState(createShuffledCards());

    const [flippedCards, setFlippedCards] = useState([]);
    const [gameWon, setGameWon] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [gameTime, setGameTime] = useState(0);
    
    const handleCardClick = (cardId) => {
    // Start timer on first card click
    if (!startTime) {
        setStartTime(Date.now());
    }
    
    // 1. Find the clicked card
    const clickedCard = cards.find(card => card.id === cardId);
    
    // 2. Check if we should ignore this click
    if (clickedCard.isFlipped || clickedCard.isMatched || flippedCards.length >= 2) {
        return; // Do nothing
    }
    
    // 3. Add this card to flippedCards array
    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);
    
    // 4. Flip the card
    setCards(prevCards =>
        prevCards.map(card =>
            card.id === cardId ? { ...card, isFlipped: true } : card
        )
    );
    
    if (newFlippedCards.length === 2) {
        const [firstCardId, secondCardId] = newFlippedCards;
        
        setTimeout(() => {
            setCards(currentCards => {
                const firstCard = currentCards.find(card => card.id === firstCardId);
                const secondCard = currentCards.find(card => card.id === secondCardId);
                
                // 6. Check if they match
                if (firstCard.image === secondCard.image) {
                    // They match - mark as matched
                    const updatedCards = currentCards.map(card =>
                        card.id === firstCardId || card.id === secondCardId
                            ? { ...card, isMatched: true }
                            : card
                    );
                    
                    // Check if all cards are now matched (game won)
                    const allMatched = updatedCards.every(card => card.isMatched);
                    if (allMatched) {
                        const endTime = Date.now();
                        const totalTime = Math.round((endTime - startTime) / 1000); // Convert to seconds
                        setGameTime(totalTime);
                        setGameWon(true);
                    }
                    
                    return updatedCards;
                } else {
                    // They don't match - flip back after delay
                    setTimeout(() => {
                        setCards(prevCards =>
                            prevCards.map(card =>
                                card.id === firstCardId || card.id === secondCardId
                                    ? { ...card, isFlipped: false }
                                    : card
                            )
                        );
                    }, 1000);
                    return currentCards; // Return unchanged for now
                }
            });
        }, 100); // Small delay to ensure state is updated
        
        // Clear flipped cards after checking
        setTimeout(() => setFlippedCards([]), 100);
    }
};

    // Reset game function
    const resetGame = () => {
        setCards(createShuffledCards()); // Create new shuffled cards
        setFlippedCards([]);
        setGameWon(false);
        setStartTime(null);
        setGameTime(0);
    };

    // Format time for display
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        if (mins > 0) {
            return `${mins}m ${secs}s`;
        }
        return `${secs}s`;
    };

    return (
        <div className="memory-game">
        <h1>Memory Card Game</h1>
        
        {gameWon && (
            <div className="congratulations">
                🎉 Congratulations! You won! 🎉
                <br />
                <span className="completion-time">
                    Completed in {formatTime(gameTime)}!
                </span>
            </div>
        )}
        
        <div className="game-board">
            {cards.map((card) => (
                <div key = {card.id} className = "card" onClick={() => handleCardClick(card.id)}>
                    {card.isFlipped || card.isMatched ? (
                        <img 
                            src={card.image} 
                            alt={`Card ${card.id}`} 
                            className={card.isMatched ? 'matched' : ''}
                        />
                    ) : (
                        <img src="/card-back.png" alt="Card back" className="card-back" />
                    )}
                </div>
            ))}
           </div>
           
           <button className="retry-button" onClick={resetGame}>
               🔄 Play Again
           </button>
           
        </div>
    );
}

export default MemoryGame;