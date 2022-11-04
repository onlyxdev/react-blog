import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function TittleDocs() {
    const localizacao = useLocation();
    const slicer = localizacao.pathname.slice(1);
    useEffect(() => {
        document.title = `${slicer}`;
    })
}