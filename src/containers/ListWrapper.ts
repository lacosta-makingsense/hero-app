import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux';

import { getHeroesRequest } from '../actions/hero';
import { AppState } from '../types/store';
import ListWrapper from '../components/heroes/ListWrapper';

const mapStateToProps = (state: AppState) => ({
  ...state.hero.list
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ getHeroesRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListWrapper);

export type ListWrapperContainerProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
