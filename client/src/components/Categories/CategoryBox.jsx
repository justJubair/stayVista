import PropTypes from "prop-types";
import {useNavigate, useSearchParams} from "react-router-dom"
import qs from "query-string"
const CategoryBox = ({ label, icon:Icon }) => {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const handleCategory=()=>{
    let currentQuery = {}
    if(params){
      currentQuery= qs.parse(params.toString())
      const updateQuery = {...currentQuery, category:label}
      const url = qs.stringifyUrl({
        url: "/",
        query:updateQuery
      })
      navigate(url)
    }
  }
  const category = params.get("category")
 
  return (
    <div onClick={handleCategory} className={`${category === label ? "border-b-2 border-black text-gray-800" : undefined} text-gray-500 flex flex-col gap-2  pb-2 items-center justify-center hover:cursor-pointer`}>
      <span>{<Icon size={26} />}</span>
      <p className="font-bold">{label}</p>
    </div>
  );
};

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.func,
};
export default CategoryBox;
