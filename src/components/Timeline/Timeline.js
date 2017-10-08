import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TimelineContent from './TimelineContent';

const Timeline = ({children, title, background, color}) => {
    const pointClassname = classnames(
        'Timeline-point-content',
        background,
        color,
    );
    return (
        <div className="Timeline u-layout-prose u-layoutCenter">
            <div className="Timeline-point">
                <div className={pointClassname}>{title}</div>
            </div>
            {children}
        </div>
    );
};

Timeline.defaultProps = {
    background: 'u-background-95',
    color: 'u-color-white',
};

Timeline.propTypes = {
    children: PropTypes.element,
    title: PropTypes.node.isRequired,
    background: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Timeline;
