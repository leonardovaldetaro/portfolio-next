import Card from './card/card';
import Styles from './Cards.module.scss';

export default function Cards() {
    // Mock data for "texto de marcação"
    const projects = [
        {
            id: 1,
            title: 'Biker\'s Journal',
            description: 'Uma breve descrição sobre o Projeto Alpha e suas principais funcionalidades.',
            image: '/assets/bikersJournal.webp',
            link: '#'
        },
        {
            id: 2,
            title: 'Marco Rodrigues Coach',
            description: 'Desenvolvimento de uma plataforma inovadora para gestão de tarefas.',
            image: '/assets/blog/placeholder-small.webp',
            link: '#'
        },
        {
            id: 3,
            title: 'Projeto Gamma',
            description: 'Aplicação web focada em performance e experiência do usuário.',
            image: '/assets/blog/placeholder-small.webp',
            link: '#'
        },
        {
            id: 4,
            title: 'Projeto Delta',
            description: 'Sistema de automação para processos internos de grandes empresas.',
            image: '/assets/blog/placeholder-small.webp',
            link: '#'
        },
        {
            id: 5,
            title: 'Projeto Epsilon',
            description: 'E-commerce completo com integrações de pagamento e logística.',
            image: '/assets/blog/placeholder-small.webp',
            link: '#'
        },
        {
            id: 6,
            title: 'Projeto Zeta',
            description: 'Dashboard analítico com visualização de dados em tempo real.',
            image: '/assets/blog/placeholder-small.webp',
            link: '#'
        }
    ];

    return (
        <section className={Styles.cardsContainer}>
            {projects.map((project) => (
                <Card
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                />
            ))}
        </section>
    );
}
