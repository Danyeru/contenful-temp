import useFetchProjectsData from './fetchProjects';

const Projects = () => {
  const { projects, isLoading } = useFetchProjectsData();
  console.log({ projects, isLoading });

  if (isLoading) {
    return (
      <section className='projects'>
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project) => {
          const { image, title, url, id } = project;
          return (
            <a
              key={id}
              href={url}
              target='_blank'
              rel='noreferrer'
              className='project'
            >
              <img src={image} alt={title} className='img' />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
