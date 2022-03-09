import React, { memo } from 'react';

const H2 = memo(({children}) => {
    return <h2>{children}</h2>
});

export default H2;