const MailButton = ({ selectedLanguage }) => {
    async function handleClick() {
        
        const emailAddress = document.getElementById('email-address').innerText;
        try {
            await navigator.clipboard.writeText(emailAddress);
            document.getElementById('default-message').classList.add('hidden');
            document.getElementById('success-message').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('default-message').classList.remove('hidden');
                document.getElementById('success-message').classList.add('hidden');
            }, 2000);
        } catch (err) {
            console.error('Error al copiar: ', err);
            /* Rechazado - fallo al copiar el texto al portapapeles */
        }
    }

    return (
        <div className="w-full">
            {
                selectedLanguage === 'Es' ? (
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email Label</label>
                        <span id="email-address" className="text-sm rounded-lg block w-full p-2">
                            romerokarina.dev@gmail.com
                        </span>
                        <button data-copy-to-clipboard-target="email-address" onClick={handleClick} className=" text-blue font-medium rounded-lg w-full py-1 text-center items-center inline-flex justify-center">
                            <span id="default-message">Copiar e-mail</span>
                            <span id="success-message" className="hidden inline-flex items-center">
                                <svg className="w-3 h-3 text-blue me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                E-mail copiado!
                            </span>
                        </button>
                    </div>
                ) : (
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email Label</label>
                        <span id="email-address" className="text-sm rounded-lg block w-full p-2">
                            romerokarina.dev@gmail.com
                        </span>
                        <button data-copy-to-clipboard-target="email-address" onClick={handleClick} className=" text-blue font-medium rounded-lg w-full py-1 text-center items-center inline-flex justify-center">
                            <span id="default-message">Copy e-mail</span>
                            <span id="success-message" className="hidden inline-flex items-center">
                                <svg className="w-3 h-3 text-blue me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                                Copied e-mail!
                            </span>
                        </button>
                    </div>
                )
            }
            
        </div>
    );
};

export default MailButton;
