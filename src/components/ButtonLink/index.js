import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonAdd } from './styles';

function ButtonLink({ href, children }) {
    return (
        <Link to={href}>
            <ButtonAdd>{children}</ButtonAdd>
        </Link>
    );
}

export default ButtonLink;
