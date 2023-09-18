import WidgetCategory from "./WidgetCategory";
import WidgetInstagramPost from "./WidgetInstagramPost";
import WidgetPostList from "./WidgetPostList";

const SidebarOne = ({dataPost}) => {
  return (
    <div className="sidebar-inner">
      <WidgetCategory catData={dataPost}/>
      <WidgetPostList postData={dataPost}/>
      <WidgetInstagramPost />
    </div>
  );
};

export default SidebarOne;
