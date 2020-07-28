import React from 'react';
import Banner from '../../components/Banner';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
    return (
        <>
            <Banner
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
            />
        </>
    );
}

export default Home;
