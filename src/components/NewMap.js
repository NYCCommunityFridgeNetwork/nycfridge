import React, { Component } from 'react';

import Modal from 'react-modal';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import { Box } from 'grommet';

import config from '../config';
import { getFridges } from '../redux/selectors'
import { fetchFridges, submitFridge } from '../redux/actions/fridge';

import LocationPin from './LocationPin';
import FridgeModal from './UI/FridgeModal'
import Header from './UI/Header';
import FridgeForm from './FridgeForm';
import CheckFridge from './CheckFridge';

import classes from '../containers/container.module.css'
import './map.css'

Modal.setAppElement('#root');
Modal.defaultStyles.content.maxWidth = '700px';
Modal.defaultStyles.content.margin = '0 auto'

class NewMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isInfoModalOpen: false,
      isSubmitModalOpen: false,
      isChecking: false,
      selectedFridge: null,
    }
  }
  componentDidMount() {
    this.props.fetchFridges();
  }

  openSubmissionModal = () => this.setState({ isSubmitModalOpen: true})

  openModal = (id, event) => {
    this.setState({ isInfoModalOpen: true})
    this.setState({ selectedFridge: this.props.fridges.find(f => f.id == id) })
  }
  
  closeModal = () => {
    this.setState({
      isInfoModalOpen: false,
      isSubmitModalOpen: false
    })
  }

  fridgeAdded = (postData) => {
    this.props.submitFridge(postData);
  }

  checkFridge = () => {
    this.setState({isChecking: true});
  }


render () {
  let markers = this.props.fridges.map(f => {
    return <LocationPin
    key={f.id}
    lat={f.lat}
    lng={f.lng}
    fridgeData={f}
    showInfoBox={true}
    clickHandler={this.openModal}
  />
  });
  
  let modal;
  if (this.state.isChecking) {
    modal = (<CheckFridge fridgeData={this.state.selectedFridge} />);
    
  } else {
    modal = (<FridgeModal fridgeData={this.state.selectedFridge}/>)
}
  return (
  <div className={classes.Container}>
    <Header
      fridges={this.props.fridges}
      showInfoBox={true}
      openSubmissionModal={this.openSubmissionModal}
    />
    <Modal
      isOpen={this.state.isSubmitModalOpen}
      onRequestClose={this.closeModal}
    >
      <FridgeForm
          onClose={this.closeModal}
          onSubmit={this.fridgeAdded}
        />
    </Modal>
  <Box className="google-map">
    <GoogleMapReact
    bootstrapURLKeys={{ key: config.google.apiKey }}
    defaultCenter={config.defaultCenter}
    defaultZoom={config.defaultZoom}
    yesIWantToUseGoogleMapApiInternals
    >
      {markers}
    </GoogleMapReact>
    <Modal
      isOpen={this.state.isInfoModalOpen}
      onRequestClose={this.closeModal}
    >
      <FridgeModal fridgeData={this.state.selectedFridge}/>
    </Modal>
    </Box>


  </div>
)

}
}
const mapStateToProps = state => {
  return {
    fridges: state.fridges,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitFridge: (postData) => dispatch(submitFridge(postData)),
    fetchFridges: () => dispatch(fetchFridges()),
    getFridges: () => dispatch(getFridges()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewMap)