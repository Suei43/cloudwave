import { useContext } from "react";
//Conponents
import { LocationContext } from "../contexts";
import { LeftSideBar, Recent, Search } from "../components/Reusable";

export function Files(props) {
  const { category } = props;
  const Location = useContext(LocationContext);
  Location.setLocation("files");

  return (
    <div className="flex flex-row w-full bg-slate-200 justify-center min-h-screen">
      <LeftSideBar />
      <div className="flex flex-col w-full md:w-10/12 py-4 items-center relative px-1 md:px-0">
        <Search />
        <div className="w-full min-h-full">
          <Recent
            title={
              category
                ? category[0].toUpperCase() + category.slice(1)
                : "All Files"
            }
            titleStyle={"ml-3 md:ml-0"}
            showAll={true}
            category={category}
            padding={"px-4"}
          />
        </div>
      </div>
    </div>
  );
}
