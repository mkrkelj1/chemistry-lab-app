import React from 'react'
import { ExperimentsAPI }  from '../../api'
import { Link } from 'react-router-dom'


const Experiments = props => {
  const _courseID = parseInt(props.match.params.id, 10);

  return (
    <div>
      <ul>
        {ExperimentsAPI.filtered(_courseID).map(e => (
          <li key={e.experimentID}>
            <Link to={`experiments/${e.experimentID}`}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experiments



