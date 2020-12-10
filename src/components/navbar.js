import React from 'react';
import styled from 'styled-components';

import logo_white from '../assets/logo_white.png';

const Navbar = () => {

    const Wrapper = styled.div`
        width: 100%;
        height: 40px;
        padding: 15px 20px;
        background-color: black;
        position: fixed;
        vertical-align: middle;
    `

    const Logoimg = styled.img`
        width: auto;
        height: 100%;
    `

    const ElWrapper = styled.span`
        position: absolute;
        right: 80px;
        top: 30px;
    `

    const Element = styled.span`
        color: white;
        font-size: 22px;
        position: relative;
        bottom: 9px;
        margin: 0 13px;
    `

    return (
        <Wrapper>
            <Logoimg src={logo_white} />
            <ElWrapper>
                <Element>ABOUT</Element>
                <Element>ACTIVITY</Element>
                <Element>PROJECT</Element>
            </ElWrapper>
        </Wrapper>
    )

}
export default Navbar;

