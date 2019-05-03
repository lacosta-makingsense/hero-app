import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux';

import { getHeroes } from '../thunks/hero';
import { AppState } from '../types/store';
import List from '../components/heroes/List';

const mapStateToProps = (state: AppState) => ({
  ...state.hero.list
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ getHeroes }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

export type ListProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
