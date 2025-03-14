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
            <h1>Para a minha princesa 💖</h1>
            <p>Você é a melhor parte dos meus dias e a melodia do meu coração. 🎶</p>
            <p>Espero que esse momento te faça sorrir do jeito que eu amo ver! 😍</p>

            {/* Vídeo tocando ao fundo */}
            <iframe
                width="0"
                height="0"
                src="https://www.youtube.com/embed/IbRtGMm96F8?autoplay=1&loop=1&playlist=IbRtGMm96F8"
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
