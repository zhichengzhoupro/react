import React, {Component} from 'react';

export default function BlogItem(props) {

    return (
        <li>
            {props.message}   {props.title}
        </li>
    );
}
