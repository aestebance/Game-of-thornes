import React from 'react';
import './Header.scss';

export function Header () {
    return (
        <div className="c-header">
            <div className="c-search-bar"></div>
            <div className="c-top-links">
                <img className="c-top-links__flag--group" src="/assets/images/group.png" alt=""/>
                <img className="c-top-links__flag" src="/assets/images/spain.png" alt=""/>
                <img className="c-top-links__flag" src="/assets/images/uk.png" alt=""/>
            </div>

        </div>
    )
}
