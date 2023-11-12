import PropTypes from "prop-types";
const CategoryBox = ({ category }) => {
  return (
    <div className="flex flex-col items-center justify-center hover:cursor-pointer">
      <span>{<category.icon className="text-slate-400" size={40} />}</span>
      <p className="font-bold text-slate-800">{category.label}</p>
    </div>
  );
};

CategoryBox.propTypes = {
  category: PropTypes.object,
};
export default CategoryBox;
