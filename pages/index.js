import { useEffect, useRef } from "react";

function Surpresa() {
    const videoRef = useRef(null);

    useEffect(() => {
        // Auto-play o vídeo ao carregar a página
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '50px',
            fontFamily: 'Arial, sans-serif',
            color: '#ff4d6d'
        }}>
            <h1>Oi meu amor</h1>
            <p>Você é a parte do meu dia, que mais anseio para eternizar.  </p>
            <p>Saudades do seu sorriso.</p>

            {/* Vídeo tocando ao fundo */}
            <iframe
                width="0"
                height="0"
                src="https://www.youtube.com/watch?v=rTsbSY04s1Y"
                title="Surpresa Musical"
                ref={videoRef}
            ></iframe>

            <p style={{ marginTop: '30px', fontSize: '18px' }}>
                <em>Te amo! ❤️</em>
            </p>
        </div>
    );
}

export default Surpresa;
