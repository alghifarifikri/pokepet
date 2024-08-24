const Status = ({ pokemon = {} }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Base Stats</h3>
      <div className="w-full">
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name} className="flex justify-between">
            <span className="capitalize font-bold">{stat.stat.name}</span>
            <span>{stat.base_stat}</span>
          </div>
        ))}
        <div className="flex justify-between">
          <span className="capitalize font-bold">Total</span>
          <span>
            {pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Status;
