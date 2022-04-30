

const TopScores = () => {
  const scores = JSON.parse(localStorage.getItem('results'));
  if (!scores) {
    return <div>No scores yet</div>;
  }

  return (
    <div>
      Previous scores:
      {scores.map(score => 
        <div>FlipCount: {score.flipCount}; TimePassed: {score.timePassed}</div>
      )}
    </div>
  );
};

export default TopScores;