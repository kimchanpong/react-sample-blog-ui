import * as React from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery } from 'react-responsive'
import ComplexGrid from "./Grid";

function List() {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    let itemWidth;
    if(isDesktop) {
        itemWidth = '25%'
    } else if(isTablet) {
        itemWidth = '25%'
    } else if(isMobile) {
        itemWidth = '50%'
    }

    return (
        <Box
            sx={{
            display: 'flex',
            flexWrap: 'wrap'
            }}
        >
            <Box sx={{width: itemWidth}}>
                <ComplexGrid />
            </Box>
            <Box sx={{width: itemWidth}}>
                <ComplexGrid />
            </Box>
            <Box sx={{width: itemWidth}}>
                <ComplexGrid />
            </Box>
            <Box sx={{width: itemWidth}}>
                <ComplexGrid />
            </Box>
        </Box>
    );
}

export default List;