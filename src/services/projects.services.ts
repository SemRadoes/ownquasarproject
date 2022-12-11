import { ref } from 'vue'

const projects = ref([
    {
        id: 1,
        title: 'Portfolio website',
        img: '../assets/Project-Management-Post.jpg',
        description: 'This is my autobiography website where you can find information about me and my projects.',
        link: 'www.sem-radoes.be/portfolio-website'
    }
]);

const useProjects = () => {
    const addProject = (title: string, img: string, description: string, link: string) => {
        const maxIndex = Math.max(...projects.value.map((p) => p.id));
        const newIndex = maxIndex + 1;
        const newProject = {id: newIndex, title: title, img: img, description: description, link: link}
        projects.value.push(newProject);
    }
    return {
        projects,
        addProject
    }
}

export {
    useProjects
}
