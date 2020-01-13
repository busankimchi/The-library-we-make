import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Divider } from 'semantic-ui-react';

const SideBarProfile = () => {
    const [isHovered, Toggle] = useState(false);
    return (
        <>
            <div
                onMouseEnter={() => Toggle(true)}
                onMouseLeave={() => Toggle(false)}>
                {
                    isHovered ? <Text /> : <Text2 />
                }
            </div>
        </>
    );

}


const Text = () => {
    return (
        <>
            text
        </>
    )
}

const Text2 = () => {
    return (
        <>
            text2
        </>
    )
}


export default SideBarProfile;