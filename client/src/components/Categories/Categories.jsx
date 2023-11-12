import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
    return(
        <Container>
           <div className="flex overflow-x-auto items-center justify-between pb-4 my-7 gap-6 ">
           {
                categories?.map((category)=> <CategoryBox key={category.label} label={category.label} icon={category.icon}/>)
            }
           </div>
        </Container>
    )}
export default Categories;