import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavListData } from "./NavListData";
import { NavListItem } from "../../utils/types/Types";
export default function NavListComp() {
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
  const navigate = useNavigate();

  const handleActivitiesClick = () => {
    setIsActivitiesOpen(!isActivitiesOpen);
    if (!isActivitiesOpen) {
      navigate("/activities/parihara"); 
    }
  };

  return (
    <ul className="flex justify-center items-center gap-8 h-full">
      {NavListData.map(
        (
          item: { route: string; navLink: string; childNav?: NavListItem[] },
          index: number
        ) => (
          <li key={index} className="relative">
            <div
              onClick={item.childNav ? handleActivitiesClick : undefined}
              className="cursor-pointer"
            >
              {item.childNav ? (
                item.navLink
              ) : (
                <NavLink to={item.route}>{item.navLink}</NavLink>
              )}
            </div>
            {item.childNav && isActivitiesOpen && (
              <ul className="absolute top-full left-0 bg-white shadow-md">
                {item.childNav.map((child, childIndex) => (
                  <li key={childIndex} className="px-4 py-2 hover:bg-gray-200">
                    <NavLink to={child.route}>{child.navLink}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      )}
    </ul>
  );
}
