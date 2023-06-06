import "../App.css"

function ZaTablicu({ZTablicu}) {
  return (
    <div className="ZaTablicu">
      <table className="tab" border="3px solid black">
        <tr>
            <td className="naslov">Born</td>
            <td className="naslov">Died</td>
            <td className="naslov">Cause of death</td>
            <td className="naslov">Genres</td>
            <td className="naslov">Active Years</td>

        </tr>
        <tr>
            <td>{ZTablicu.born}</td>
            <td>{ZTablicu.died}</td>
            <td>{ZTablicu.cod}</td>
            <td>{ZTablicu.genres}</td>
            <td>{ZTablicu.ay}</td>

        </tr>
      </table>
    </div>
  );
}

export default ZaTablicu;