import React from 'react';

import SECTIONS_DATA from "./sections.data.js";

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: SECTIONS_DATA,
        }
    }

    render() {
        const { sections } = this.state;
        return (
            <div className="directory-menu">
                {sections.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={`directory-${id}`} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory;
