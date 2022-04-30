

const TopScores = () => {
  // TODO: Use redux here
  const scores = JSON.parse(localStorage.getItem('results'));
  if (!scores) {
    return <div>No scores yet</div>;
  }

  return (
    <div>
      Top scores:
      {scores.map(score => 
        <div>FlipCount: {score.flipCount}; TimePassed: {score.timePassed}</div>
      )}
    </div>
  );
};

export default TopScores;