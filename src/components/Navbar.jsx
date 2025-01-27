import { ICON_HELPER } from "../helper/icon_helper";
import { useDispatch, useSelector } from "react-redux";
import { TRIGER_SHUFFLE } from "../redux/shuffle_triger_slice";
import _ from "lodash";
import { Link, useHref } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  let favorite = useSelector((data) => data?.favorite_slice?.value);

  let path = useHref();

  let MENU_ITEMS = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: `Favorite ${_.isEmpty(favorite) ? "" : favorite?.length}`,
      link: "/favorite",
    },
  ];

  return (
    <div className="w-full h-[100px] center_div">
      <div className="center_div !justify-between w-full bg-slate-100 !text-black !font-medium h-[50px] rounded !px-4">
        <div>Recipes</div>
        <div className="center_div gap-x-4">
          {MENU_ITEMS.map((res, index) => {
            return (
              <Link
                className={`${path === res.link ? "!text-orange-500" : ""}`}
                key={index}
                to={res.link}
              >
                {res.name}
              </Link>
            );
          })}
        </div>
        <div
          className="center_div gap-x-2 !cursor-pointer"
          onClick={() => {
            dispatch(TRIGER_SHUFFLE());
          }}
        >
          <ICON_HELPER.SHUFFLE_ICON className="!text-lg" /> Shuffle
        </div>
      </div>
    </div>
  );
};

export default Navbar;
