import Container from "../Shared/Container";
import { categories } from "./CategoriesData";

const Categories = () => {
    return(
        <Container>
           <div className="flex overflow-x-scroll items-center justify-evenly pb-4 my-7 gap-6 lg:overflow-x-hidden">
           {
                categories?.map((category, idx)=> <div className="flex flex-col items-center" key={idx}><span>{<category.icon className="text-slate-500" size={40}/>}</span>
                <p className="font-bold">{category.label}</p>
                </div>)
            }
           </div>
        </Container>
    )}
export default Categories;