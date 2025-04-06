

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <header className="bg-blue-600 text-white py-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Mi Portafolio</h1>
                    <p className="text-lg mt-2">Desarrollador Web</p>
                </div>
            </header>

            <section className="container mx-auto py-12 px-6">
                <h2 className="text-3xl font-semibold text-center mb-6">Sobre Mí</h2>
                <p className="text-lg text-center max-w-3xl mx-auto">
                    ¡Hola! Soy un Kevin Escoto desarrollador web apasionado por crear aplicaciones modernas y funcionales.
                    Me encanta aprender nuevas tecnologías y resolver problemas complejos con soluciones creativas.
                </p>
            </section>

            <section className="bg-gray-200 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-6">Habilidades</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind CSS", "Git",].map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md text-center font-medium text-gray-700"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

=            <section className="container mx-auto py-12 px-6">
                <h2 className="text-3xl font-semibold text-center mb-6">Proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((project) => (
                        <div
                            key={project}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <img
                                src={`https://picsum.photos/id/120/200/300`}
                                alt={`Proyecto ${project}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Proyecto {project}</h3>
                                <p className="text-gray-600">
                                    Descripción breve del proyecto. Incluye tecnologías utilizadas y objetivos alcanzados.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            
        </div>
    );
};

export default About;