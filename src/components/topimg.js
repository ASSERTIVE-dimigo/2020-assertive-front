import React from 'react';
import styled from 'styled-components';

import farmimg from '../assets/farm_testimg.jpg';

const Topimg = () => {

    const Wrapper = styled.img`
        width: 100%;
        height: 900px;
    `
    return (
        <>
            <Wrapper src={farmimg} />
        </>
    )

}
export default Topimg;

