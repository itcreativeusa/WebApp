import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { hasIPhoneNotch } from '../../utils/cordovaUtils';
import { renderLog } from '../../utils/logging';

class FirstPositionIntroModal extends Component {
  static propTypes = {
    classes: PropTypes.object,
    pathname: PropTypes.string,
    show: PropTypes.bool,
    toggleFunction: PropTypes.func.isRequired,
  };

  constructor (props) {
    super(props);
    this.state = {
      pathname: '',
    };
  }

  componentDidMount () {
    // this.friendStoreListener = FriendStore.addListener(this.onFriendStoreChange.bind(this));
    // FriendActions.currentFriends();

    this.setState({
      pathname: this.props.pathname,
    });
  }

  componentWillUnmount () {
    // this.friendStoreListener.remove();
  }

  // onFriendStoreChange () {
  //   const { currentFriendsList } = this.state;
  //   if (currentFriendsList.length !== FriendStore.currentFriends().length) {
  //     this.setState({ currentFriendsList: FriendStore.currentFriends() });
  //   }
  // }

  closeThisModal = () => {
    this.props.toggleFunction(this.state.pathname);
  }

  render () {
    renderLog('FirstPositionIntroModal');  // Set LOG_RENDER_EVENTS to log all renders
    const { classes } = this.props;

    return (
      <Dialog
        classes={{ paper: classes.dialogPaper }}
        open={this.props.show}
        onClose={() => { this.props.toggleFunction(this.state.pathname); }}
      >
        <ModalTitleArea>
          <div>
            <Title>
              Choose Your First Candidate
            </Title>
          </div>
          <IconButton
            aria-label="Close"
            className={classes.closeButton}
            onClick={this.closeThisModal}
            id="closeFirstPositionIntroModal"
          >
            <CloseIcon />
          </IconButton>
        </ModalTitleArea>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <div className="full-width">
            &nbsp;
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}
const styles = () => ({
  dialogPaper: {
    marginTop: hasIPhoneNotch() ? 68 : 48,
    '@media (min-width: 576px)': {
      maxWidth: '600px',
      width: '90%',
      height: 'fit-content',
      margin: '0 auto',
      minWidth: 0,
      minHeight: 0,
      transitionDuration: '.25s',
    },
    minWidth: '100%',
    maxWidth: '100%',
    width: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    height: '100%',
    margin: '0 auto',
  },
  dialogContent: {
    padding: '0 24px 12px 24px',
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  closeButton: {
    marginLeft: 'auto',
  },
});

/* eslint no-nested-ternary: ["off"] */
const ModalTitleArea = styled.div`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: ${props => (props.firstSlide ? '24px 24px 12px 24px' : '10px 14px')};
  z-index: 999;
  @media (min-width: 769px) {
    border-bottom: 2px solid #f7f7f7;
  }
  display: flex;
`;

const Title = styled.h3`
  font-size: 24px;
  color: black;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: bold;
  @media (max-width: 769px) {
    font-size: 18px;
  }
`;

export default withTheme(withStyles(styles)(FirstPositionIntroModal));
