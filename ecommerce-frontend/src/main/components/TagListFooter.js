import React from 'react';

function TagListFooter(props) {
    const tag = props.tag;
    return (
        <li>
            <a className="text-gray-600 hover:text-gray-800">{tag.tagName}</a>
        </li>
    );
}

export default TagListFooter;