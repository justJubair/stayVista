import PropTypes from "prop-types";
import {useNavigate, useSearchParams} from "react-router-dom"
import qs from "query-string"
const CategoryBox = ({ category }) => {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  const handleCategory=()=>{
    let currentQuery = {}
    if(params){
      currentQuery= qs.parse(params.toString())
      const updateQuery = {...currentQuery, category:category.label}
      const url = qs.stringifyUrl({
        url: "/",
        query:updateQuery
      })
      navigate(url)
    }
  }
  return (
    <div onClick={handleCategory} className="flex flex-col gap-2 border-b-2 pb-2 items-center justify-center hover:cursor-pointer">
      <span>{<category.icon size={26} />}</span>
      <p className="font-bold">{category.label}</p>
    </div>
  );
};

CategoryBox.propTypes = {
  category: PropTypes.object,
};
export default CategoryBox;
