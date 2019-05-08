import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux';

import { getHeroRequest } from '../actions/hero';
import { AppState } from '../types/store';
import Details from '../components/heroes/Details';

const mapStateToProps = (state: AppState) => ({
  ...state.hero.details
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ getHeroRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

export type DetailsProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
