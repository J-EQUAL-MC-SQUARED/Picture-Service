import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import PicModule from '../Client/src/components/PicModule.jsx';

describe('PicModule', ()=>{
  test('picmodule should render', () => {
    render(<PicModule />)
    expect( document.getElementById("flex-container")).toBeInTheDocument()
  })

  test('picmodule should render fullscreen modal when lens is clicked', () => {
    render(<PicModule />)
    const container = document.getElementById("picture-module-horizontal-scroll");
    const lens = document.getElementById('zoomLens');
    fireEvent.mouseEnter(container);
    fireEvent.click(lens);

    const fullscreenBTN = Array.from(document.getElementsByClassName('headerCountBTN'))[0];
    expect(fullscreenBTN).toBeInTheDocument();
  })

})