import { Cards } from "../../Components/Cards/cards";

export const Projects = () => {

    const projects = [
        {
            'title': 'uno',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum fugiat quas modi, quo possimus dolor excepturi odit numquam laborum? Voluptas minima labore tempora aut non?',
            'image' : 'holder.js/100x180',
        },
        {
            'title': 'dos',
            'text' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex asperiores fuga perspiciatis illum fugiat quas modi, quo possimus dolor excepturi odit numquam laborum? Voluptas minima labore tempora aut non?',
            'image' : "holder.js/100x180",
        }
    ]

    return(
        <div className="projects">
            <h3 className="projects-title">My projects</h3>

            {projects.map(({title, text, image, alt}) => (
                <Cards title={title} text={text} image={image} alt={title}/>
            ))}
            
        </div>
    )
}