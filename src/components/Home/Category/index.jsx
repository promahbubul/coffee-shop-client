
import categories from "../../../constants/category";

const Category = () => {
  return (
    <section className="bg-[#ECEAE3]">
      <div className=" py-14 max-w-7xl gap-9 mx-auto flex flex-row justify-between">
        {categories.map((category) => (
          <div key={category.id} className="max-w-[300px]">
            <img src={category.img} alt="" className="" />
            <h3 className="text-4xl mt-4 font-rancho font-normal  text-coffee">
              {category.title}
            </h3>
            <p className="text-black-1 font-normal text-base font-raleway mt-2">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
