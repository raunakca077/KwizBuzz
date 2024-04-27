import React, { useState } from 'react';

const ZanzibarRules = () => {
  const [showRules, setShowRules] = useState(false);

  const rules = (
    <div className="text-left bg bg-gradient-to-r from-gray-500 to-green-200 ">
      <h2 className="text-2xl text-black font-bold mb-4">Rules of Zanzibar</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Zanzibar is a dice game that can be played with any number of players.</li>
        <li>Each player starts with 5 chips.</li>
        <li>The game follows these steps:
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>The first player rolls the dice. The score is displayed on the scoreboard.</li>
            <li>Subsequent players, in turn, try to get a higher score than the first player.</li>
          </ol>
        </li>
        <li>The scoring system is based on the following combinations (in descending order):
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>4, 5, 6 (Zanzibar)</li>
            <li>1, 1, 1</li>
            <li>2, 2, 2</li>
            <li>3, 3, 3</li>
            <li>4, 4, 4</li>
            <li>5, 5, 5</li>
            <li>6, 6, 6</li>
            <li>1, 2, 3</li>
          </ol>
          All other combinations rank as a points total of the three dice added together, where:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>1 = 100 points</li>
            <li>6 = 60 points</li>
            <li>2 = 2 points</li>
            <li>3 = 3 points</li>
            <li>4 = 4 points</li>
            <li>5 = 5 points</li>
          </ul>
        </li>
        <li>At the end of a round, the player with the lowest score receives chips from the other players based on the winning hand:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>1 chip if the highest throw is a points total</li>
            <li>2 chips if the highest throw is 1, 2, 3</li>
            <li>3 chips if the highest throw is three-of-a-kind</li>
            <li>4 chips if the highest throw is 4, 5, 6 (Zanzibar)</li>
          </ul>
        </li>
        <li>Multiple rounds are played, and the winner is the player who loses all their chips first.</li>
        <li>Player can restart the game after the current ongoing game ends.</li>
      </ol>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white ">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-orange-500">Welcome to Zanzibar</h1>
          <p className="text-lg">
            A fun dice game for any number of players. Click the button below to learn how to play.
          </p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => setShowRules(!showRules)}
          >
            {showRules ? 'Hide Rules' : 'Learn the Rules'}
          </button>
        </div>
        {showRules && (
          <div className="bg-gray-800 p-6 rounded-lg">
            {rules}
          </div>
        )}
      </div>
    </div>
  );
};

export default ZanzibarRules;