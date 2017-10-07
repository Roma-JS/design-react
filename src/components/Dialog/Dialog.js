import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Frdialogmodal from 'fr-dialogmodal/dialogmodal.js';

const baseClasses = [
    'Dialog-content',
    'Dialog-content--centered',
    'u-background-white',
    'u-layout-prose',
    'u-margin-all-xl',
    'u-padding-all-xl',
    'js-fr-dialogmodal-modal',
];

class Dialog extends React.Component {
    static PropTypes = {
        type: PropTypes.oneOf(['info', 'danger']),
        children: PropTypes.node,
    };

    constructor() {
        super();
        // sara valorizzato dopo componentDidMount()
        this.dialogInstance = null;
    }

    componentDidMount() {
        this.dialogInstance = Frdialogmodal({
            // String - Outer container selector, hook for JS init() method
            selector: '.js-fr-dialogmodal',

            // String - Modal selector, the element that represents the modal
            modalSelector: '.js-fr-dialogmodal-modal',

            // String - Selector for the open button
            openSelector: '.js-fr-dialogmodal-open',

            // String - Selector for the close button
            closeSelector: '.js-fr-dialogmodal-close',

            // Boolean - Switches the dialog role to alertdialog, only use this when representing an alert, error or warning
            isAlert: false,

            // String - Class name that will be added to the selector when the component has been initialised
            readyClass: 'fr-dialogmodal--is-ready',

            // String - Class name that will be added to the selector when the component is active
            activeClass: 'fr-dialogmodal--is-active',
        });
    }

    render() {
        return (
            <div className="Dialog js-fr-dialogmodal" id="modal">
                <div
                    className={classnames(baseClasses)}
                    aria-labelledby="modal-title">
                    <div role="document" className="Prose">
                        <h2
                            className="u-cf u-text-h2 u-borderHideFocus"
                            id="modal-title"
                            tabIndex="0">
                            AKSDHSAKJDASH
                        </h2>
                        <p>AHDOASDASDSA</p>
                        <button className="Button Button--danger js-fr-dialogmodal-close u-floatRight">
                            Chiudi
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;
