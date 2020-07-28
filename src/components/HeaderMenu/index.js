import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import ButtonLink from '../ButtonLink';
import { Navbar, ImageLog } from './styles';

function HeaderMenu() {
    return (
        <Navbar className="Menu">
            <Link to="/">
                <ImageLog className="Logo" src={Logo} alt="text RibeiroFlix'" />
            </Link>
            <ButtonLink as={Link} href="/register-video">
                Novo vídeo
            </ButtonLink>
        </Navbar>
    );
}

export default HeaderMenu;
