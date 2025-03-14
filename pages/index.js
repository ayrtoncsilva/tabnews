import { useEffect, useState } from "react";

function Surpresa() {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowMessage(true), 6000);
    }, []);

    return (
        <div className="container">
            {/* Animação de corações */}
            <div className="hearts"></div>

            <h1 className="glow-text">Oi, meu amor.</h1>

            <p className="fade-in-text text-box">
                Tem algo que preciso te falar e só de pensar nisso, já me dá aquele frio na barriga.
                Mas antes de falar, queria destacar que você não é só alguém especial, 
                <strong> mas sim a melhor parte dos meus dias.</strong>
                Teu sorriso ilumina tudo em minha volta e seu abraço é o único lugar onde tudo faz sentido.
            </p>

            <p className="fade-in-text text-box">
                Mas o que eu quero te falar está subentendido nesta música. 
                Estava ouvindo e lembrei de você. Será por quê? rsrs
            </p>

            <p className="fade-in-text text-box">
                Te amo minha chata.
            </p>

            {/* Vídeo */}
            <div className="fade-in-video">
                <iframe 
                    width="640" 
                    height="360" 
                    src="https://www.youtube.com/embed/rTsbSY04s1Y?autoplay=1&loop=1&playlist=rTsbSY04s1Y" 
                    title="Surpresa Musical"
                    allow="autoplay; encrypted-media" 
                    allowFullScreen
                    style={{
                        borderRadius: "15px",
                        boxShadow: "0 6px 12px rgba(0,0,0,0.3)"
                    }}
                ></iframe>
            </div>

            {/* Estilos */}
            <style>
                {`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    body, html {
                        height: 100%;
                        font-family: 'Poppins', sans-serif;
                    }

                    .container {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        background: linear-gradient(135deg, #ff7eb9, #feb2ff, #6a11cb, #2575fc);
                        background-size: 400% 400%;
                        animation: gradientShift 15s ease infinite;
                        color: #333;
                        text-align: center;
                    }

                    .fade-in-text {
                        animation: fadeIn 3s ease-in-out;
                        font-size: 1.3em;
                        max-width: 700px;
                        line-height: 1.8;
                        margin: 10px;
                    }

                    .text-box {
                        padding: 20px;
                        border-radius: 10px;
                        background-color: rgba(255, 255, 255, 0.8);
                    }

                    .glow-text {
                        font-size: 2.5em;
                        font-weight: bold;
                        color: #fff;
                        text-shadow: 0 0 15px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.8);
                        margin-bottom: 20px;
                        animation: glow 2s infinite alternate;
                    }

                    .fade-in-video {
                        animation: fadeIn 4s ease-in-out;
                        margin-top: 30px;
                    }

                    .typing-effect {
                        font-size: 1.8em;
                        font-weight: bold;
                        overflow: hidden;
                        white-space: nowrap;
                        border-right: 3px solid #ff4d6d;
                        width: fit-content;
                        margin-top: 40px;
                        animation: typing 3s steps(40) forwards, fadeIn 6s;
                    }

                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    @keyframes gradientShift {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }

                    @keyframes glow {
                        0% { text-shadow: 0 0 15px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.8); }
                        100% { text-shadow: 0 0 25px rgba(255, 0, 255, 1), 0 0 35px rgba(255, 0, 255, 1); }
                    }

                    @keyframes typing {
                        from { width: 0; }
                        to { width: 100%; }
                    }

                    /* Criando os corações flutuantes */
                    .hearts::before, .hearts::after {
                        content: '❤️';
                        position: absolute;
                        font-size: 30px;
                        animation: hearts-float 6s linear infinite;
                        left: 50%;
                        opacity: 0.6;
                    }

                    .hearts::before {
                        animation-delay: 2s;
                        left: 40%;
                    }

                    .hearts::after {
                        animation-delay: 4s;
                        left: 60%;
                    }

                    @keyframes hearts-float {
                        0% { transform: translateY(0) scale(0.8); opacity: 1; }
                        100% { transform: translateY(-100vh) scale(1.3); opacity: 0; }
                    }
                `}
            </style>
        </div>
    );
}

export default Surpresa;
