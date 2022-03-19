import React from 'react';
import { Link } from 'react-router-dom';

function TagMenu(props) {
  const tag = props.tag;
  return (
    <Link to='/' currentTag={tag.tagName} className="px-3 py-1 rounded-full text-white bg-black text-sm flex align-center cursor-pointer active:bg-black transition duration-300 ease">
      {tag.tagName}
    </Link>
  );
}

export default TagMenu;