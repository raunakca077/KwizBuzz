const scores = [
    { c: '4,5,6', score: "Zanzibar",rank:-1000 },
    { c: '1,1,1', score: "Triple Ones",rank:-999},
    { c: '2,2,2', score: "Triple Twos" ,rank:-998},
    { c: '3,3,3', score: "Triple Threes",rank:-997 },
    { c: '4,4,4', score: "Triple Fours",rank:-996 },
    { c: '5,5,5', score: "Triple Fives",rank:-995 },
    { c: '6,6,6', score: "Triple Sixes" ,rank:-994},
    { c: '1,2,3', score: "One Two Three",rank:-993},
  ];

  const points = { 1: 100, 6: 60, 2: 2, 3: 3, 4: 4, 5: 5 };

function calculate(arr)
{
  
    let sortedArr = arr.sort();
    const nw=sortedArr.toString();
    const foundScore = scores.find(item => item.c === nw);
    if (foundScore) return { score: foundScore.score, rank: foundScore.rank };
    else    {let sm=0;
        for(let x of sortedArr)
        sm+=points[x];
        return {score:sm,rank:-1*sm};}
  
}

function chipTransfer(score) {
    if (typeof score === "number") {
      return 1;
    } else if (score === "One Two Three") {
      return 2;
    } else if (score.startsWith("Triple")) {
      return 3;
    } else if (score === "Zanzibar") {
      return 4;
    }
  }

export {calculate,chipTransfer}