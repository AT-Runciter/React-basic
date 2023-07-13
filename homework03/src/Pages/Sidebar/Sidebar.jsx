import './Sidebar.css';
import materials from '../../data/materials.json'

function Sidebar(){
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    {materials.map((item,idx)=>
                        <li key={idx}> 
                            <a href={item.href }>{item.title}</a>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar; 