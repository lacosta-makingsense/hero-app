import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux';

import { getHero } from '../thunks/hero';
import { AppState } from '../types/store';
import Details from '../components/heroes/Details';

const mapStateToProps = (state: AppState) => ({
  ...state.hero.details
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ getHero }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

export type DetailsProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
