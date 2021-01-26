import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import HorizontalScroll from './HorizontalScroll';
import VerticalScroll from './VerticalScroll';

class PicModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      largePics: [],
      thumbnails: [],
      modalView: false,
      currentIndex: 0,
    };
    this.modalView = this.modalView.bind(this);
    this.idxSync = this.idxSync.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    axios.get(`/api/picture-service/${productId}`)
      .then((data) => {
        this.setState({ description: data.data[0].description });
        this.setState({ largePics: data.data[0].largePics });
        this.setState({ thumbnails: data.data[0].thumbnails });
      })
      .catch((err) => err);
  }

  modalView() {
    const defaultStyle = document.getElementById('defaultStyle');
    const modalStyle = document.getElementById('modalStyle');
    const { modalView } = this.state;

    if (modalView === false) {
      this.setState({ modalView: true });
      modalStyle.href = 'modal.css';
      defaultStyle.href = '';
    } else {
      this.setState({ modalView: false });
      modalStyle.href = '';
      defaultStyle.href = 'styles.css';
    }
  }

  idxSync(index) {
    this.setState({ currentIndex: index });
  }

  render() {
    const {
      largePics,
      thumbnails,
      currentIndex,
      description,
      modalView,
    } = this.state;
    return (
      <div>
        { modalView === false && (
        <div id="flex-container">
          <VerticalScroll
            thumbnails={thumbnails}
            focus={currentIndex}
            idxSync={this.idxSync}
          />
          <HorizontalScroll
            largePics={largePics}
            modalView={this.modalView}
            idxSync={this.idxSync}
            currentIndex={currentIndex}
            fullScreen={modalView}
          />
        </div>
        )}
        {modalView === true && (
        <div>
          <div id="modalHeader">
            <button id="headerCountBTN" className="headerCountBTN" type="button">{`${currentIndex + 1} / ${largePics.length}`}</button>
            <h3>{description}</h3>
            <button className="closeBTN" type="button" onClick={this.modalView}>X</button>
          </div>
          <div id="flex-container">
            <HorizontalScroll
              largePics={largePics}
              modalView={this.modalView}
              idxSync={this.idxSync}
              currentIndex={currentIndex}
              fullScreen={modalView}
            />
            <VerticalScroll
              thumbnails={thumbnails}
              focus={currentIndex}
              idxSync={this.idxSync}
            />
          </div>
        </div>
        )}
      </div>
    );
  }
}

PicModule.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default PicModule;
