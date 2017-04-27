import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import Header from './header';
import { receivePresentationItem } from '../../../actions/presentation_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    receivePresentationItem: (presentationitem, presentationType) => dispatch(receivePresentationItem(presentationitem, presentationType))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
