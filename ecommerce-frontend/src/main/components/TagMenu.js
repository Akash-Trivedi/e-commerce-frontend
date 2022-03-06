import React from 'react';

function TagMenu(props) {
    const tag = props.tag;
    return (
        <span
            className="px-4 py-2 rounded-full text-gray-900 bg-gray-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            {tag.tagName}
        </span>
    );
}

export default TagMenu;