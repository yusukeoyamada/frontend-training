import { connect } from 'react-redux';

import ColorfulBeads from '../components/ColorfulBeads';
import { CounterState } from '../reducers/reducer';

interface StateProps {
  count: number;
}

const mapStateToProps = (state: CounterState) => ({
  count: state.count,
});

export default connect(mapStateToProps)(ColorfulBeads);
