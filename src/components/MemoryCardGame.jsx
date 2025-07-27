import React from 'react';

const MemoryGame = () => {
    const cardImages = ['blue-circle.png', 'green-triangle.png', 'red-square.png', 'yellow-star.png', 'pink-heart'];

    const cards = [
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
    ]

    return (
        <div className="memory-game">
        <h1>Memory Card Game</h1>
        <div className="game-board">
            {cards.map((card) => (
                <div key = {card.id} className = "card">
                    {card.isFlipped || card.isMatched ? (
                        <img src={card.image} alt={`Card ${card.id}`} />
                    ) : (
                        <img src="/card-back.png" alt="Card back" className="card-back" />
                    )}
                </div>
            ))}
           </div>     
        {}
        </div>
    );
}

export default MemoryGame;